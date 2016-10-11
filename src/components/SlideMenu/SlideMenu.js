import React, { Component } from 'react';
import { Link } from 'react-router';
import './SlideMenu.css';

class SlideMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      animate: true
    };
  }
  open() {
    this.setState({
      open: true
    });
  }
  close() {
    this.setState({
      open: false
    });
  }
  closeWithoutAnimate() {
    this.setState({
      animate: false,
      open: false
    });

    setTimeout(() => {
      this.setState({ animate: true });
    }, 500);
  }
  toggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    var sidebarClass = 'sidebar' + (this.state.open ? ' open' : '');
    var contentClass = 'content' + (this.state.open ? ' open' : '');

    if (this.state.animate) {
      contentClass = contentClass.replace('no-animate', '');
    } else {
      contentClass += ' no-animate'
    }

    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { slideMenu: this })
    );

    return (
      <div>
        <div className={sidebarClass}>
          <ul>
            <li><Link to={'/categories/makeup/products'}>Makeup</Link></li>
            <li><Link to={'/categories/skincare/products'}>Skin Care</Link></li>
            <li><Link to={'/categories/bath-and-body/products'}>Bath Body</Link></li>
            <li><Link to={'/categories/hair/products'}>Hair</Link></li>
            <li><Link to={'/categories/men/products'}>Men</Link></li>
          </ul>
        </div>

        <div className={contentClass}>
        { childrenWithProps }
        </div>
      </div>
    );
  }
}

export default SlideMenu;
