import { gql } from '@apollo/client';

// input UpdateUser {
//   email: EmailAddress!
//   name: String
//   password: String
//   description: String
//   old_password: String
//   github: String
//   linkedin: String
//   avatar_url: URL
// }

const UpdateUserMutation = gql`
  mutation updateUser($data: UpdateUser!) {
    updateUser(data: $data) {
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
`;

export default UpdateUserMutation;
