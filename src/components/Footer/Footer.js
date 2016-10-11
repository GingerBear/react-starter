import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>© 2016 BRANDING BRAND</p>
        <ul>
          <li><Link to={`/About`}>About</Link></li>
          <li><a href="">Terms</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Security</a></li>
          <li><a href="">Status</a></li>
          <li><a href="">Help</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
