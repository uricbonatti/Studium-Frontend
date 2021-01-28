import { gql } from '@apollo/client';

// type Category {
//   id: ObjectID!
//   name: String!
// }

const CreateCategoryMutation = gql`
  mutation createCategory($name: String!) {
    createCategory(data: { name: $name }) {
      id
      name
    }
  }
`;

export default CreateCategoryMutation;
