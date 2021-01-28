import { onError } from '@apollo/client/link/error';

import toast from '../utils/toast';
//Aqui vai ser refatorado algumas vezes para incluir as mudanças futuras de erro.
export const errorHandler = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions }) => {
      if (extensions?.code === 'GRAPHQL_VALIDATION_FAILED') {
        toast.error(`Type Error: ${message}`);
      } else {
        console.error(
          `Graphql erro: ${message} in API:${process.env.REACT_APP_API_DEV}`,
        );
      }
    });
  }
});
