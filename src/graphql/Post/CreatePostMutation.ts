import { gql } from '@apollo/client';

/*
O objeto CreatePostTag tem o seguinte formato:
{
  tag_id: String!
}

então para chamar esta mutation é preciso passar para a variavel tag_ids um
array contendo objetos no formato CreatePostTag
*/

// input CreatePost {
//   title: String!
//   image_url: URL
//   body: String!
//   category_id: ObjectID!
//   tag_ids: [CreatePostTag!]!
// }
// input CreatePostTag {
//   tag_id: ObjectID!
// }
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
// }

const CreatePostMutation = gql`
  mutation createPost($data: CreatePost!) {
    createPost(data: $data) {
      id
      author {
        id
        name
        avatar_url
      }
      title
      image_url
      body
      category {
        id
        name
      }
      created_at
      tags {
        id
        name
      }
    }
  }
`;

export default CreatePostMutation;
