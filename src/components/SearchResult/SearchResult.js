import React, { Component } from 'react';
import './SearchResult.css';
import ProductItem from '../ProductItem/ProductItem'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    var location = this.props.location;
    this.fetchProducts(location.pathname + location.search);
  }
  componentWillReceiveProps(nextProps) {

    // if url not changed, don't re-render
    if (this.props.location === nextProps.location) return;

    var location = nextProps.location;
    this.fetchProducts(location.pathname + location.search);
  }
  fetchProducts(url) {
    this.props.slideMenu.closeWithoutAnimate();
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
    });
  }
  renderProduct(product, i) {
    return <ProductItem key={i} data={product}></ProductItem>
  }
  render() {
    if (!this.state.data) {
      return <Loading></Loading>
    }
    return (
      <div>
        <Breadcrumbs breadcrumbs={this.state.data.breadcrumbs}></Breadcrumbs>
        <div className="SearchResult">
          { this.state.data.products.map(this.renderProduct) }
        </div>
        <Pagination pagination={this.state.data.pagination} location={this.props.location}></Pagination>
      </div>
    );
  }
}

export default SearchResult;
