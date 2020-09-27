import React from 'react';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const text = 'Olá';
  return (
    <>
      <Header />
      <h1>{text}</h1>
    </>
  );
};

export default Home;
