import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

class NoMatch extends Component {
  render() {
    return (
      <header>

      <div className="logo">
        <Link to={`/`}>fullsite demo</Link>
      </div>

      <ul>
        <li><Link to={'/categories/makeup/products'}>Makeup</Link></li>
        <li><Link to={'/categories/skincare/products'}>Skin Care</Link></li>
        <li><Link to={'/categories/bath-and-body/products'}>Bath Body</Link></li>
        <li><Link to={'/categories/hair/products'}>Hair</Link></li>
        <li><Link to={'/categories/men/products'}>Men</Link></li>
      </ul>

      </header>
    );
  }
}

export default NoMatch;
