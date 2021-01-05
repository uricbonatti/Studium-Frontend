import { gql } from '@apollo/client';

const ListCategoriesQuery = gql`
  query listCategories($id: String) {
    listCategories(id: $id) {
      id
      name
    }
  }
`;

export default ListCategoriesQuery;
