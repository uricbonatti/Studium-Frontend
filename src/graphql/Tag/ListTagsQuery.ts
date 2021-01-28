import { gql } from '@apollo/client';

// type Tag {
//   id: ObjectID!
//   name: String!
//   category: Category!
// }

// input TagFilter {
//   category_id: ObjectID!
// }

const ListTagsQuery = gql`
  query listTags($filter: TagFilter) {
    listTags(filter: $filter) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

export default ListTagsQuery;
