import React, { Component } from 'react';
import { Link } from 'react-router';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  renderItem(item, i) {
    return (
      <li key={i}>
        <Link to={item.href}>{item.name}</Link>
      </li>
    );
  }
  render() {
    return (
      <ul className="breadcrumbs">
        <li><Link to="/">Home</Link></li>
        { this.props.breadcrumbs.map(this.renderItem) }
      </ul>
    );
  }
}

export default Breadcrumbs;
