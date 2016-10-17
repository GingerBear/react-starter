import React, { Component } from 'react';
import './BazaarVoiceInlineRating.css';

class BazaarVoiceInlineRating extends Component {
  render() {
    var id = `BVRRInlineRating-${this.props.productId}`;
    return (
      <div className="bv-inline-rating" id={id}></div>
    );
  }
}

export default BazaarVoiceInlineRating;
