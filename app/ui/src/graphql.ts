import { ApolloClient, InMemoryCache } from '@apollo/client';

export const grapqlClient = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache(),
});