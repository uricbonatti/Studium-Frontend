import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error'

const errorLint = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql erro: ${message} in API:${process.env.REACT_APP_API_DEV}`)
    })
  }
})

const httpLink = from([
  errorLint,
  new HttpLink({
    uri: process.env.REACT_APP_API_DEV,
    credentials: 'same-origin'
  })
])

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('@Studium:token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

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
