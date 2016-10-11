import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/App';
import Home from './components/Home/Home';
import ProductIndex from './components/ProductIndex/ProductIndex';
import SearchResult from './components/SearchResult/SearchResult';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="search" component={SearchResult}/>
      <Route path="categories/:category_handle_1/products" component={ProductIndex}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))