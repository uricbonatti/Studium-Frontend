import { gql } from '@apollo/client';

const SignUpMutation = gql`
  mutation SignUp($userName: String!, $password: String!, $email: String!) {
    addUser(userName: $userName, userPassword: $password, userEmail: $email) {
      id
    }
  }
`;

export default SignUpMutation;
