import { ApolloClient, InMemoryCache } from "@apollo/client";

const api = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default api;
