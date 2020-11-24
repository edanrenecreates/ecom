import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    // filter products with links
    this.props.fetchShopProducts();
  }

  render() {
    return (
      <div className='shop'>
        Shop...
        {/* Shop Searchbar component */}
        {/* Shop product component */}
        {/* Cart button */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;