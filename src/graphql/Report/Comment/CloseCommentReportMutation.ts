import { gql } from '@apollo/client';

// input CloseCommentReport {
//   id: ObjectID!
//   feedback: String!
//   action: String!
// }

// type CommentReport {
//   id: ObjectID!
//   comment_id: ObjectID!
//   title: String!
//   body: String!
//   closed: Boolean!
//   feedback: String
//   action: String
//   created_at: Date!
//   updated_at: Date!
// }

const CloseCommentReportMutation = gql`
  query closeCommentReport($data: CloseCommentReport!) {
    closeCommentReport(data: $data) {
      id
      comment_id
      title
      body
      closed
      feedback
      action
      created_at
      updated_at
    }
  }
`;

export default CloseCommentReportMutation;
