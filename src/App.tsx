import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import api from "./services/api";

const App: React.FC = () => (
  <>
    <ApolloProvider client={api}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </>
);

export default App;
