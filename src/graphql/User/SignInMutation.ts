import { gql } from '@apollo/client';

const SignInMutation = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(userPassword: $password, userEmail: $email) {
      token
      user {
        id
        userExp
        userName
        userLevel
        userPermission
        userRanking
        userImageURL
        userDescription
      }
    }
  }
`;

export default SignInMutation;
