import { gql } from '@apollo/client';

// input UpdateComment {
//   id: ObjectID!
//   body: String!
// }
// type Comment {
//   id: String!
//   author: Author!
//   created_at: Date!
//   updated_at: Date!
//   body: String!
//   post_id: ObjectID!
// }

const UpdateCommentMutation = gql`
  mutation updateComment($data: UpdateComment) {
    updateComment(data: $data) {
      id
      author
      created_at
      updated_at
      body
      post_id
    }
  }
`;

export default UpdateCommentMutation;
