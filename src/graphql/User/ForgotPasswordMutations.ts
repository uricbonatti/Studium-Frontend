import { gql } from '@apollo/client';

const ForgotPasswordMutation = gql`
  mutation createUser($email: EmailAddress!) {
    forgotPassword(data: { email: $email })
  }
`;

export default ForgotPasswordMutation;
