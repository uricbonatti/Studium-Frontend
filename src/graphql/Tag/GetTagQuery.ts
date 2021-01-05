import { gql } from '@apollo/client';

const GetTagQuery = gql`
  query getTag($id: ID) {
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

export default GetTagQuery;
