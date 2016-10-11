import React, { Component } from 'react';
import './ProductIndex.css';
import ProductItem from '../ProductItem/ProductItem.js'

class ProductIndex extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    var location = this.props.location;
    this.fetchProducts(location.pathname + location.search);
  }
  componentWillReceiveProps(nextProps) {
    var location = nextProps.location;
    this.fetchProducts(location.pathname + location.search);
  }
  fetchProducts(url) {
    this.setState({
      data: null
    });

    return fetch('/api' + url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        data: json
      })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }
  renderProduct(product, i) {
    return <ProductItem key={i} data={product}></ProductItem>
  }
  render() {
    if (!this.state.data) {
      return <div>loading products...</div>
    }
    return (
      <div className="ProductIndex">
        { this.state.data.products.map(this.renderProduct) }
      </div>
    );
  }
}

export default ProductIndex;
