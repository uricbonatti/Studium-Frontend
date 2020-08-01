import { gql } from "@apollo/client";

const newPaper = gql`
  mutation NewPaper(
    $name: String!
    $author: String!
    $text: String!
    $tags: [TagFilter!]
  ) {
    newPaper(data: { name: $name, author: $author, text: $text, tags: $tags }) {
      name
    }
  }
`;
export default newPaper;
