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

const OpenPostReportsQuery = gql`
  query openPostReports {
    openPostReports {
      id
      post_id
      title
      created_at
    }
  }
`;
export default OpenPostReportsQuery;
