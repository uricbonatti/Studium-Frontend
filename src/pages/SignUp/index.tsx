import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/LogoStudium.svg';
import { useMutation } from '@apollo/client';
import CreateUserMutation from '../../graphql/User/CreateUserMutations';
import getValidationErrors from '../../utils/getValidationErrors';
import { AnimationContainer, Background, Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  description?: string;
  github?: string;
  linkedin?: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [createUser] = useMutation<{}, { data: SignUpFormData }>(
    CreateUserMutation,
  );

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um email valido'),
          password: Yup.string().min(
            6,
            'A senha precisa de no minimo 6 digitos',
          ),
          description: Yup.string(),
          github: Yup.string(),
          linkedin: Yup.string(),
        });
        await schema.validate(data, { abortEarly: false });
        await createUser({ variables: { data } });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [history, createUser],
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Studium" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu Logon</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Input name="github" icon={FiGithub} placeholder="Github" />
            <Input name="linkedin" icon={FiLinkedin} placeholder="LinkedIn" />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
