import { gql } from '@apollo/client';

const UserActivitySummaryQuery = gql`
  query userSummary($id: ID!) {
    userSummary(id: $id) {
      lastWeek {
        postsLiked
        postsCreated
        commentsLiked
        commentsCreated
      }
      weekExp
      lastWeekPosts {
        id
        title
        created_at
      }
    }
  }
`;

export default UserActivitySummaryQuery;
