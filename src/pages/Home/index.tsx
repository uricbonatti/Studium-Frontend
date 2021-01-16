import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import PostList from '../../components/PostList';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
};

export default Home;
