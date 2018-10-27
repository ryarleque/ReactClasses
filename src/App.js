import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    filterText: '',
    isOnlyStock : false
  }

  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  this.handleIsOnlyStockChange = this.handleIsOnlyStockChange.bind(this);
}

handleFilterTextChange(newValue) {
  this.setState({
    filterText : newValue
  });
}

handleIsOnlyStockChange(newValue){
  this.setState({
    isOnlyStock : newValue
  });
}

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          isOnlyStock={this.state.isOnlyStock}
          onHandleFilterTextChange = {this.handleFilterTextChange}
          onHandleIsOnlyStockChange = {this.handleIsOnlyStockChange}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          isOnlyStock={this.state.isOnlyStock}
        />
      </div>
    );
  }
}

App.propTypes = {

};


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export default App;