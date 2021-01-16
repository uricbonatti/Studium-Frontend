import React, { useCallback, useRef } from 'react';
import { useAuth } from '../../hooks/auth';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Background, AnimationContainer, Content } from './styles';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import logoImg from '../../assets/LogoStudium.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha Obrigatódia'),
        });
        await schema.validate(data, { abortEarly: false });
        await signIn({ email: data.email, password: data.password });
        console.table(user);
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [signIn, history, user],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Studium" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu Logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
