import React, { Component } from 'react';
import { Link } from 'react-router';
import Swatches from '../Swatches/Swatches';
import './ProductItem.css';
import BazaarVoiceInlineRating from '../BazaarVoice/BazaarVoiceInlineRating';

class ProductItem extends Component {
  toFixed(num) {
    return (+num).toFixed(2);
  }

  formatPrice(priceMin, priceMax) {
    if (priceMin === priceMax) {
      return '$' + this.toFixed(priceMin);
    } else {
      return '$' + this.toFixed(priceMin) + ' - $' + this.toFixed(priceMax);
    }
  }

  render() {
    var data = this.props.data;
    var displayPrice = this.formatPrice(data.price_min, data.price_max);
    var displayRetailPrice = this.formatPrice(data.retail_price_min, data.retail_price_max);

    if (displayPrice === displayRetailPrice) {
      displayRetailPrice = null;
    }

    var href = `/products/${data.handle}`;
    var imgSrc = data.images[0] ? data.images[0].src : '';
    var rating = this.props.showRating ? <BazaarVoiceInlineRating productId={data.id}></BazaarVoiceInlineRating> : '';
    var swatches = this.props.showSwatches ? <Swatches variants={data.variants} showMax={5}></Swatches> : '';

    return (
      <div className="ProductItem">
        <Link to={href}>
          <img src={imgSrc} alt={data.title} />
          <div className="detail-1">
            <div className="brand">{data.brand.name}</div>
            <div className="title">{data.title}</div>
          </div>
          <span className="detail-2">
            <div className="price">{displayPrice}</div>
            { swatches }
            { rating }
          </span>
        </Link>
      </div>
    );
  }
}

export default ProductItem;
