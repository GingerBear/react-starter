import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import './SearchForm.css';

const ENTER_KEY = 13;

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // use arrow function to bind correct `this
  handleChange = (e) => {
    this.setState({
      q: e.target.value
    });
  }
  handleSubmit = (e) => {
    browserHistory.push('/search?q=' + encodeURIComponent(this.state.q || ''));
  }
  handleKeyDown = (e) => {
    if (e.which === ENTER_KEY) {
      this.handleSubmit(e);
    }
  }
  render() {
    return (
      <div className="searchForm">
        <input
          type="text"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}/>
        <button
          className="button"
          onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchResult;
