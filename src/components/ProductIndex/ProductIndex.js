import React, { Component } from 'react';
import './ProductIndex.css';
import ProductItem from '../ProductItem/ProductItem'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import BazaarVoiceScript from '../BazaarVoice/BazaarVoiceScript';

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
    })
  }
  getGridView() {
    return this.props.cms && this.props.cms['Product-Index-Page-Settings'] && this.props.cms['Product-Index-Page-Settings']['Grid-List-View'];
  }
  getBVId() {
    return this.props.cms && this.props.cms['Product-Index-Page-Settings'] && this.props.cms['Product-Index-Page-Settings']['bazaarvoice-id'];
  }
  getSwatchesSetting() {
    return this.props.cms && this.props.cms['Product-Index-Page-Settings'] && this.props.cms['Product-Index-Page-Settings']['Show-Swatches'];
  }
  renderProduct = (product, i) => {
    var showRating = !!this.getBVId();
    var showSwatches = this.getSwatchesSetting() === '1';

    return <ProductItem key={i} data={product} showRating={showRating} showSwatches={showSwatches}></ProductItem>
  }
  render() {
    if (!this.state.data) {
      return <Loading></Loading>
    }

    var ProductIndexClass = 'ProductIndex';
    if (this.getGridView()) {
      ProductIndexClass += ' ' + this.props.cms['Product-Index-Page-Settings']['Grid-List-View'];
    }

    var bvScript = '';
    var bvId = this.getBVId();
    if (bvId) {
      bvScript = <BazaarVoiceScript bvId={bvId} productIds={this.state.data.products.map(p => p.id)}></BazaarVoiceScript>
    }

    return (
      <div>
        <Breadcrumbs breadcrumbs={this.state.data.breadcrumbs}></Breadcrumbs>
        <div className={ProductIndexClass}>
          { this.state.data.products.map(this.renderProduct) }
        </div>
        <Pagination pagination={this.state.data.pagination} location={this.props.location}></Pagination>
        { bvScript }
      </div>
    );
  }
}

export default ProductIndex;
