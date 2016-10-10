import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <h1>content goes <Link to={`/categories/makeup/products`}>Here</Link></h1>
    );
  }
}

export default Home;
