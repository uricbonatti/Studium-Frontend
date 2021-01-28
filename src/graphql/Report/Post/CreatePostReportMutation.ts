import { gql } from '@apollo/client';

// input OpenPostReport {
//   post_id: ObjectID!
//   body: String!
//   title: String!
// }

// type NewPostReport {
//   id: ObjectID
//   post_id: ObjectID
//   title: String
//   body: String
//   closed: Boolean
//   created_at: Date
// }

const CreatePostReportMutation = gql`
  mutation createPostReport($data: OpenPostReport!) {
    createPostReport(data: $data) {
      id
      post_id
      title
      body
      closed
      created_at
    }
  }
`;
export default CreatePostReportMutation;
