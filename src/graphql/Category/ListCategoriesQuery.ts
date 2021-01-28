import { gql } from '@apollo/client';

// type Category {
//   id: ObjectID!
//   name: String!
// }

//Return an array of categories
const ListCategoriesQuery = gql`
  query listCategories {
    listCategories {
      id
      name
    }
  }
`;

export default ListCategoriesQuery;
