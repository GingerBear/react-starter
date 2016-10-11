import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <span className="spinner"></span>
      </div>
    );
  }
}

export default Loading;
