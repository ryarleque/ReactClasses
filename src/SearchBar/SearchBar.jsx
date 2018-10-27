import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsOnlyStockChange = this.handleIsOnlyStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onHandleFilterTextChange(e.target.value);
    }

    handleIsOnlyStockChange(e){
        this.props.onHandleIsOnlyStockChange(e.target.checked);
    }

    render() {

        var {filterText, isOnlyStock} = this.props;

        return (
            <form className="form">
                <input type="text" placeholder="Search.." className="search" value={filterText} onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox" checked={isOnlyStock} onChange={this.handleIsOnlyStockChange}/>
                    <span className="stock">Only show products in stock</span>
                </p>
            </form>
        );
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string,
    isOnlyStock: PropTypes.bool,
    onHandleFilterTextChange: PropTypes.func,
    onHandleIsOnlyStockChange: PropTypes.func
};

export default SearchBar;