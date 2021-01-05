import { gql } from '@apollo/client';

const CreateTagMutation = gql`
  mutation createTag($name: String!, $category_id: String!) {
    createTag(data: { name: $name, category_id: $category_id }) {
      id
      name
      category {
        name
      }
    }
  }
`;

export default CreateTagMutation;
