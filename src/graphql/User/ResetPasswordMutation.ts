import { gql } from '@apollo/client';

const ResetPasswordMutation = gql`
  mutation($data: ResetPassword) {
    resetPassword(data: $data)
  }
`;

export default ResetPasswordMutation;
