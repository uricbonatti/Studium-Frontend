import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';
import GlobalStyle from './styles/global';
import graphqlApi from './services/graphqlApi';
import { AuthProvider } from './hooks/auth';
import StudiumToastContainer from './components/StudiumToastContainer';

const App: React.FC = () => {
  return (
    <>
      <ApolloProvider client={graphqlApi}>
        <AuthProvider>
          <Router>
            <Routes />
          </Router>
        </AuthProvider>
      </ApolloProvider>
      <GlobalStyle />
      <StudiumToastContainer />
    </>
  );
};

export default App;
