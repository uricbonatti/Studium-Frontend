import { gql } from '@apollo/client';

/*
O objeto CreatePostTag tem o seguinte formato:
{
  tag_id: String!
}

então para chamar esta mutation é preciso passar para a variavel tag_ids um
array contendo objetos no formato CreatePostTag
*/

const CreatePostMutation = gql`
  mutation createPost(
    $title: String!
    $image_url: String
    $body: String!
    $category_id: String
    $tag_ids: [CreatePostTag]
  ) {
    createPost(
      data: {
        title: $title
        image_url: $image_url
        body: $body
        category_id: $category_id
        tag_ids: $tag_ids
      }
    ) {
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
