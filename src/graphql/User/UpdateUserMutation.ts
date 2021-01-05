import { gql } from '@apollo/client';

const UpdateUserMutation = gql`
  mutation updateUser(
    $email: String
    $name: String
    $password: String
    $description: String
    $old_password: String
    $github: String
    $linkedin: String
    $avatar_url: String
  ) {
    updateUser(
      data: {
        email: $email
        name: $name
        password: $password
        description: $description
        old_password: $old_password
        github: $github
        linkedin: $linkedin
        avatar_url: $avatar_url
      }
    ) {
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
