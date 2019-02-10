import App, {Container} from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import Menu from '../components/Menu';
import '../styles.css';

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props
    return <Container>
      <ApolloProvider client={apolloClient}>
        <Menu id={2} pageProps={pageProps} />
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  };
}

export default withApolloClient(MyApp)
