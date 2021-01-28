import { gql } from '@apollo/client';

// input CreateComment {
//   post_id: ObjectID!
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

const CreateCommentMutation = gql`
  mutation createComment($data: CreateComment!) {
    createComment(data: $data) {
      id
      post_id
      author
      body
      created_at
      updated_at
    }
  }
`;

export default CreateCommentMutation;
