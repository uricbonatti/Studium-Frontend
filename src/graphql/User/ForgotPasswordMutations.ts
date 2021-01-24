import { gql } from '@apollo/client';

const ForgotPasswordMutation = gql`
  mutation($email: EmailAddress!) {
    forgotPassword(data: { email: $email })
  }
`;

export default ForgotPasswordMutation;
