import { from, HttpLink } from '@apollo/client';
import { errorHandler } from './errorHandler';

export const httpLink = from([
  errorHandler,
  new HttpLink({
    uri: process.env.REACT_APP_API_URL || 'http://localhost:4000',
    credentials: 'same-origin',
  }),
]);
