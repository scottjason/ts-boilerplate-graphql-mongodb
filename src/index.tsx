import * as React from 'react';
import { App } from './App';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const generateUri = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://ts-auth-graphql-mongodb.herokuapp.com/graphql'
    : 'http://localhost:3000/graphql';
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: generateUri(),
  credentials: 'include',
});

const ApolloApp = (AppComponent: React.FC) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById('root') as HTMLElement);
