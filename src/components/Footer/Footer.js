import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <ul>
        <li><Link to={`/About`}>About</Link></li>
        <li><Link to={`/NoMatch`}>NoMatch</Link></li>
      </ul>
    );
  }
}

export default Footer;
