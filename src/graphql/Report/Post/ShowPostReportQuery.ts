import { gql } from '@apollo/client';

// type PostReport {
// id: ObjectID!
// post_id: ObjectID!
// title: String!
// body: String!
// closed: Boolean!
// feedback: String
// action: String
// created_at: Date!
// updated_at: Date!
// }

const ShowPostReportQuery = gql`
  query showPostReport($id: ObjectID) {
    showPostReport(id: $id) {
      id
      post_id
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

export default ShowPostReportQuery;
