import { gql } from '@apollo/client';

const CreateCommentMutation = gql`
mutation CreateComment($userId: String!, $commentBody: String!){
  addComment()

}`;

export default CreateCommentMutation;
