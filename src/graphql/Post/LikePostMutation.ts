import { gql } from '@apollo/client';

const LikePostMutation = gql`
  mutation likePost($post_id: ObjectID!) {
    likePost(post_id: $post_id)
  }
`;
export default LikePostMutation;
