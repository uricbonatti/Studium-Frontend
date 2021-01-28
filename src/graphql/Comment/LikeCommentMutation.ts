import { gql } from '@apollo/client';

const LikeCommentMutation = gql`
  mutation likeComment($comment_id: ObjectID!) {
    likeComment(comment_id: $comment_id)
  }
`;
export default LikeCommentMutation;
