import { gql } from '@apollo/client';

// type PostReport {
//   id: ObjectID!
//   post_id: ObjectID!
//   title: String!
//   body: String!
//   closed: Boolean!
//   feedback: String
//   action: String
//   created_at: Date!
//   updated_at: Date!
// }

const UserPostReportsQuery = gql`
  query userPostReports {
    userPostReports {
      id
      post_id
      title
      updated_at
      closed
    }
  }
`;
export default UserPostReportsQuery;
