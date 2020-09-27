import { gql } from '@apollo/client';

const UpdateUserMutation = gql`
  mutation UpdateUser(
    $id: String!
    $password: String
    $email: String
    $userExp: Int
    $avatar: String
    $description: String
  ) {
    updateUser(
      _id: $id
      userEmail: $email
      userPassword: $password
      userExp: $userExp
      userImageURL: $avatar
      userDescription: $description
    ) {
      userEmail
      userExp
      userName
      userLevel
      userPermission
      userRanking
      userImageURL
      userDescription
    }
  }
`;

export default UpdateUserMutation;
