import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App/App';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))