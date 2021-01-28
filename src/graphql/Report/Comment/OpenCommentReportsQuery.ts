import { gql } from '@apollo/client';

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

const OpenCommentReportsQuery = gql`
  query openCommentReports {
    openCommentReports {
      id
      comment_id
      title
      created_at
    }
  }
`;
export default OpenCommentReportsQuery;
