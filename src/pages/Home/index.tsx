import React from 'react';
import './styles.css'
import Header from '../../components/Header';
import PostList from '../../components/PostList';

function Home () {
  return (
    <>
      <Header/>
      <PostList />
    </>
  )
}

export default Home;
