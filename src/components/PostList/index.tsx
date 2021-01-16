import React from 'react';
import './styles.css';
import Post from '../Post';

const PostList: React.FC = () => {
  return (
    <div className="post-list-container">
      <div className="post-list-items">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostList;
