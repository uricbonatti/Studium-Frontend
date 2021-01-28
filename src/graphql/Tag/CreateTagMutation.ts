import { gql } from '@apollo/client';

// input CreateTag {
//   name: String!
//   category_id: ObjectID!
// }

// type Tag {
//   id: String!
//   name: String!
//   category: Category!
// }

const CreateTagMutation = gql`
  mutation createTag($name: String!, $category_id: ObjectID!) {
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
