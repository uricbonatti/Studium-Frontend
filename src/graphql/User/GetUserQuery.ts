import { gql } from '@apollo/client';

const GetUserQuery = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id
      name
      email
      description
      github
      avatar_url
      created_at
      level
      exp_percent
    }
  }
`;

export default GetUserQuery;
