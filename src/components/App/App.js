import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:4000' + this.props.location.pathname + '.json').then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        data: json
      })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
