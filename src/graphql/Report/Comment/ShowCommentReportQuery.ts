import { gql } from '@apollo/client';

// type CommentReport {
// id: ObjectID!
// comment_id: ObjectID!
// title: String!
// body: String!
// closed: Boolean!
// feedback: String
// action: String
// created_at: Date!
// updated_at: Date!
// }

const ShowCommentReportQuery = gql`
  query showCommentReport($id: ObjectID) {
    showCommentReport(id: $id) {
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

export default ShowCommentReportQuery;
