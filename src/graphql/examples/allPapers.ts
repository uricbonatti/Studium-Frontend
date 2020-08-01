import { gql } from "@apollo/client";

const allPapers = gql`
  query GetAllPapers {
    papers {
      id
      name
      author
      tags {
        tech
      }
    }
  }
`;
export default allPapers;
