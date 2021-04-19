import { gql } from '@apollo/client';

// input PostFilter {
//   category_id: ObjectID
//   part_of_title: String
//   author_id: ObjectID
// }

export const GET_POSTS = gql`
  query listPosts($filter: PostFilter) {
    listPosts(filter: $filter) {
      id
      title
      image_url

      body
      category {
        id
        name
      }
      created_at
      updated_at
      tags {
        id
        name
      }
    }
  }
`;
