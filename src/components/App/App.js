import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        { this.props.children }
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
