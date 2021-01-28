import { gql } from '@apollo/client';

// input OpenCommentReport {
//   comment_id: ObjectID!
//   body: String!
//   title: String!
// }

// type NewCommentReport {
//   id: ObjectID
//   comment_id: ObjectID
//   title: String
//   body: String
//   closed: Boolean
//   created_at: Date
// }

const CreateCommentReportMutation = gql`
  mutation createCommentReport($data: OpenCommentReport!) {
    createCommentReport(data: $data) {
      id
      comment_id
      title
      body
      closed
      created_at
    }
  }
`;
export default CreateCommentReportMutation;
