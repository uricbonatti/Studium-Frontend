import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('@Studium:token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
