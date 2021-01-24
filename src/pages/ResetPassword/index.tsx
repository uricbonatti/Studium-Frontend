import React, { useRef, useCallback } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer, Background } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';
import ResetPasswordMutation from './../../graphql/User/ResetPasswordMutation';

import logoImg from '../../assets/LogoStudium.svg';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const location = useLocation();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [resetPasswordM, { error }] = useMutation<void>(ResetPasswordMutation, {
    onCompleted: () => {
      history.push('/');
    },
    onError: () => {
      console.log(error);
    },
  });

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta',
          ),
        });
        await schema.validate(data, { abortEarly: false });
        const { password, password_confirmation } = data;

        const token = location.search.replace('?token=', '');
        if (!token) {
          throw new Error();
        }
        await resetPasswordM({
          variables: {
            data: {
              token,
              password,
              password_confirmation,
            },
          },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [location.search, resetPasswordM],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Studium" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Resetar Senha</h1>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova Senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de Senha"
            />
            <Button type="submit">Alterar Senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
