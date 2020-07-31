import React, { Component } from 'react';
import Footer from 'components/footer';

class Layout extends Component {
  render() {
    return (
      <div className="layout container">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout