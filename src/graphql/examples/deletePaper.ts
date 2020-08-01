import { gql } from "@apollo/client";

const deletePaper = gql`
  mutation DeletePaper($id: Int!) {
    deletePaper(filter: { id: $id }) {
      name
    }
  }
`;
export default deletePaper;
