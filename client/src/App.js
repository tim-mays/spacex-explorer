import React, { Component, Fragment } from 'react';
import Routes from './routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import SiteHeader from './components/siteHeader';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <Routes>
            <SiteHeader />
          </Routes>
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App;
