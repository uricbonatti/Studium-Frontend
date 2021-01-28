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

const UserCommentReportsQuery = gql`
  query userCommentReports {
    userCommentReports {
      id
      comment_id
      title
      updated_at
      closed
    }
  }
`;
export default UserCommentReportsQuery;
