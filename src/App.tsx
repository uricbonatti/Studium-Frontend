import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';
import GlobalStyle from './styles/global';
import graphqlApi from './services/graphqlApi';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <ApolloProvider client={graphqlApi}>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </ApolloProvider>
    <GlobalStyle />
  </>
);

export default App;
