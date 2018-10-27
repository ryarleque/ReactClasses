import React from 'react';
import PropTypes from 'prop-types';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = props => {

    var rows = [];
    var productList = props.products;
    var lastRow = null;
    var {filterText, isOnlyStock} = props;


    productList.forEach((item, index, obj) => {

        if(item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }

        if(isOnlyStock && !item.stocked){
            return;
        }

        if(item.category !== lastRow){
            rows.push(
                <ProductCategoryRow
                    category= {item.category}
                    key= {index}
                />
            );
        }

        rows.push(
            <ProductRow
                name={item.name}
                price={item.price}
                isOnStock={item.stocked}
                key= {item.name}
            />
        );

        lastRow = item.category;
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="category">Name</th>
                    <th className="category">Price</th>
                </tr>
            </thead>
            <tbody className="content">{rows}</tbody>
        </table>
    );
};

ProductTable.propTypes = {
    products: PropTypes.array,
    filterText : PropTypes.string,
    isOnlyStock : PropTypes.bool
};

export default ProductTable;