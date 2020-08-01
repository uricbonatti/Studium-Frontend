import { gql } from "@apollo/client";

const getPaper = gql`
  query GetPaper($id: Int!) {
    paper(filter: { id: $id }) {
      name
      author
      text
      tags {
        tech
      }
    }
  }
`;
export default getPaper;
