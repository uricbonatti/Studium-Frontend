import React, { useEffect, useState } from 'react';
import './styles.css';
import Post from '../Post';
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../../graphql/Post/ListPostsQuery'
import { Posts } from '../../utils/types'


const PostList: React.FC = ()  => {
  // search posts
  const [posts, setPosts] = useState<Posts[]>([])
  const { error, loading, data } = useQuery(GET_POSTS, { variables: {} })
  useEffect(() => { if (data) setPosts(data.listPosts) }, [data])
  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro inesperado: {error} ...</p>
  return (
    <div className="post-list-container">
      <div className="post-list-items">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
