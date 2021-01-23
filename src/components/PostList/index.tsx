import React, { useEffect } from 'react';
import './styles.css';
import Post from '../Post';
import { useQuery, gql } from '@apollo/client'
import { GET_POSTS } from '../../graphql/Post/ListPostsQuery'

const PostList: React.FC = () => {
  const { error, loading, data } = useQuery(GET_POSTS)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="post-list-container">
      <div className="post-list-items">
        <Post />
      </div>
    </div>
  );
};

export default PostList;
