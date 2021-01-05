import { gql } from '@apollo/client';

const DeletePostMutation = gql`
  mutation deletePost($id: String) {
    deletePost(id: $id)
    id
  }
`;

export default DeletePostMutation;
