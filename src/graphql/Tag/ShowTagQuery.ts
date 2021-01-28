import { gql } from '@apollo/client';

// type Tag {
//   id: String!
//   name: String!
//   category: Category!
// }

const ShowTagQuery = gql`
  query showTag($id: ObjectID!) {
    getTag(id: $id) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

export default ShowTagQuery;
