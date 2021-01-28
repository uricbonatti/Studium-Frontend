import { gql } from '@apollo/client';

// type Post {
//   id: ObjectID!
//   author: Author!
//   title: String!
//   image_url: URL
//   resume: String!
//   body: String!
//   category: Category!
//   created_at: Date!
//   updated_at: Date!
//   comments: [Comment]!
//   tags: [Tag!]!
//   likes: Int!
// }

// type Comment {
//   id: String!
//   author: Author!
//   created_at: Date!
//   updated_at: Date!
//   body: String!
//   post_id: ObjectID!
// }

const ShowPostQuery = gql`
  query showPost($id: ObjectID!) {
    getPost(id: $id) {
      id
      author {
        id
        name
        avatar_url
      }
      title
      image_url
      resume
      body
      category {
        id
        name
      }
      tags {
        id
        name
      }
      created_at
      updated_at
      comments {
        id
        author {
          id
          name
          avatar_url
        }
        created_at
        updated_at
        body
      }
      likes
    }
  }
`;

export default ShowPostQuery;
