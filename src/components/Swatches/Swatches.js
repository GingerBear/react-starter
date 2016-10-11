import React, { Component } from 'react';
import './Swatches.css';

class Swatches extends Component {
  render() {
    var swatches = this.props.variants.map((variant, i) => {
      var swatch = variant.attributes
        .filter(attr => attr.name === 'swatch')
        .map(attr => {
          if (attr.extra_value === 'hex') {
            return (
              <li className="swatch-item" key={i}>
                <span style={{backgroundColor: `#${attr.value}`}}></span>
              </li>
            )
          } else {
            return (
              <li className="swatch-item" key={i}>
                <img src="{attr.value}" alt="swatch" />
              </li>
            );
          }
        })
        .pop();

      if (swatch) {
        return swatch;
      } else {
        return null;
      }

    }).filter(attr => attr);

    if (swatches.length) {
      var slicedSwatches = swatches.slice(0, this.props.showMax)
      if (swatches.length > this.props.showMax) {
        slicedSwatches.push(<li className="swatch-item has-more" key="more">+</li>);
      }
      return (
        <ul className="Swatches">
          { slicedSwatches }
        </ul>
      );
    } else {
      return null;
    }

  }
}

export default Swatches;
