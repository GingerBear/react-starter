import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm'

class Header extends Component {
  handleSlideMenuToggle = () => {
    // slideMenu is passed down from SlideMenu component
    this.props.slideMenu.toggle();
  }
  render() {
    return (
      <header>

      <div className="header">
        <div className="left">
          <button className="button" onClick={this.handleSlideMenuToggle}>toggle</button>
        </div>
        <div className="middle">
          <Link className="logo" to={'/'}>fullsite demo</Link>
        </div>
        <div className="right">
          <a href="#">Cart</a>
        </div>
      </div>

      <SearchForm></SearchForm>

      </header>
    );
  }
}

export default Header;
