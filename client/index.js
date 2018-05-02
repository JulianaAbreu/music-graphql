import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import  { ApolloProvider } from 'react-apollo';

import App from './components/App'
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail'

import './style/style.css'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return(
    <ApolloProvider client={ client}>
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList}/>
          </Route>
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" components={SongDetail}/>
        </Router>
      </div>
    </ApolloProvider>

  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
