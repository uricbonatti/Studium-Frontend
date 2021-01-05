import { gql } from '@apollo/client';

const LoginQuery = gql`
  query login($email: String!, $password: String!) {
    login(data: { password: $password, email: $email }) {
      token
      user {
        id
        name
        email
        description
        github
        avatar_url
        created_at
        level
        exp_percent
      }
    }
  }
`;

export default LoginQuery;
