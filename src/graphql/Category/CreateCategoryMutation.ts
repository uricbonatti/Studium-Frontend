import { gql } from '@apollo/client';

const CreateCategoryMutation = gql`
  mutation createCategory($name: String!) {
    createCategory(data: { name: $name }) {
      id
      name
    }
  }
`;

export default CreateCategoryMutation;
