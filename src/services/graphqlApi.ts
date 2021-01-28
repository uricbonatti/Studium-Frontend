import { ApolloClient, InMemoryCache } from '@apollo/client';
import { httpLink } from './httpLink';
import { authLink } from './authLink';

const graphqlApi = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default graphqlApi;
