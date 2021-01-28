import { gql } from '@apollo/client';

const DeleteCommentMutation = gql`
  mutation deleteComment($id: ObjectID!) {
    deleteComment(id: $id)
  }
`;

export default DeleteCommentMutation;
