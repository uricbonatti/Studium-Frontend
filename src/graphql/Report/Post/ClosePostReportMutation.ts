import { gql } from '@apollo/client';

// input ClosePostReport {
//   id: ObjectID!
//   feedback: String!
//   action: String!
// }

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

const ClosePostReportMutation = gql`
  query closePostReport($data: ClosePostReport!) {
    closePostReport(data: $data) {
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

export default ClosePostReportMutation;
