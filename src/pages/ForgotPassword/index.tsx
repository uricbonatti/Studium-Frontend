import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer, Background } from './styles';

import ForgotPasswordMutation from './../../graphql/User/ForgotPasswordMutations';
import getValidationErrors from './../../utils/getValidationErrors';

import logoImg from '../../assets/LogoStudium.svg';
import toast from '../../utils/toast';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const [forgotPassword, { error }] = useMutation<void>(
    ForgotPasswordMutation,
    {
      onCompleted: () => {
        setLoading(false);
        toast.success('E-mail enviado com sucesso!');
      },
      onError: () => {
        setLoading(false);
        console.log(error);
      },
    },
  );

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });
        await schema.validate(data, { abortEarly: false });
        await forgotPassword({
          variables: {
            email: data.email,
          },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          setLoading(false);
          return;
        }
      }
    },
    [forgotPassword],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Studium" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Recuperar Senha</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>
          <Link to="/signin">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default ForgotPassword;
