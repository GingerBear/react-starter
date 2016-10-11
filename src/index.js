import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import 'foundation-sites/dist/foundation.css';

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
      <Route path="categories/:s1/products" component={ProductIndex}/>
      <Route path="categories/:s1/:s2/products" component={ProductIndex}/>
      <Route path="categories/:s1/:s2/:s3/products" component={ProductIndex}/>
      <Route path="categories/:s1/:s2/:s3/:s4/products" component={ProductIndex}/>
      <Route path="categories/:s1/:s2/:s3/:s4/:s5/products" component={ProductIndex}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))