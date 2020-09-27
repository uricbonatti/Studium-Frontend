import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { GithubButton, LinkedInButton } from '../../components/SocialButton';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  useEffect(() => {
    signIn({ password: '123456', email: 'teste@teste.tes.ts' });
  }, [signIn]);

  const handleSocialLogin = (user: any) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err: any) => {
    console.error(err);
  };
  return (
    <Container>
      <h1>Studium</h1>
      <h3>Seja bem-vindo!</h3>
      <p>
        Sabemos que compartilhar conhecimento é o que faz com que mais
        questionamentos sejam criados, e assim mais conhecimento seja gerado.
      </p>
      <p>
        E para que não percamos o foco, a plataforma é voltada as pessoas que
        acreditam assim como nós nisso. Pessoas que são apaixonadas por
        tecnologia seja em qual area atue, da educação a medicina.
      </p>
      <LinkedInButton
        provider="linkedin"
        appId="Any"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        LinkedIn
      </LinkedInButton>
      <GithubButton
        provider="github"
        appId="Any"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Github
      </GithubButton>
    </Container>
  );
};

export default SignIn;
