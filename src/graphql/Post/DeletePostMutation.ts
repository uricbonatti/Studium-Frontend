import { gql } from '@apollo/client';

const DeletePostMutation = gql`
  mutation deletePost($id: ObjectID) {
    deletePost(id: $id)
  }
`;

export default DeletePostMutation;
