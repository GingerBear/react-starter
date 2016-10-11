import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import SlideMenu from '../SlideMenu/SlideMenu.js'

class App extends Component {
  render() {
    return (
      <SlideMenu className="App">
        <Header></Header>
        { this.props.children }
        <Footer></Footer>
      </SlideMenu>
    );
  }
}

export default App;
