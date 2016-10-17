import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import SlideMenu from '../SlideMenu/SlideMenu.js'
import Loading from '../Loading/Loading.js'


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/cms').then((response) => {
      return response.json()
    }).then(json => {
      this.setState({
        cms: json.cms
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        forceRender: true
      });
    });
  }

  render() {

    if (!this.state.cms && !this.state.forceRender) {
      return <Loading></Loading>
    }

    var childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { cms: this.state.cms })
    );

    return (
      <SlideMenu className="App">
        <Header></Header>
        { childrenWithProps }
        <Footer></Footer>
      </SlideMenu>
    );
  }
}

export default App;
