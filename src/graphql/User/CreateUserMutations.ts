import { gql } from '@apollo/client';

const CreateUserMutation = gql`
  mutation createUser($data: CreateUser) {
    createUser(data: $data) {
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

export default CreateUserMutation;
