import { gql } from '@apollo/client';

const ListTagsQuery = gql`
  query listTags($category_id: String) {
    listTags(filter: { category_id: $category_id }) {
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
