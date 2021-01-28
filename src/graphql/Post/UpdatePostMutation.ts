import { gql } from '@apollo/client';

const UpdatePostMutation = gql`
  mutation updatePost($data: UpdatePost!) {
    updatePost(data: $data) {
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
    }
  }
`;

export default UpdatePostMutation;
