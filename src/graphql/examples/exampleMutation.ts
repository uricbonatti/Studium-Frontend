import { gql } from "@apollo/client";

const exampleMutation = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export default exampleMutation;
