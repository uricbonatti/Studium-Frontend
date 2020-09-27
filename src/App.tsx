import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';
import GlobalStyle from './styles/global';
import graphqlApi from './services/graphqlApi';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <ApolloProvider client={graphqlApi}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
