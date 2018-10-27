import React from 'react';
import PropTypes from 'prop-types';
import './ProductCategoryRow.css';

const ProductCategoryRow = props => {

    var {category} = props;

    return (
        <tr>
            <th colSpan="2" className="item">{category}</th>
        </tr>
    );
};

ProductCategoryRow.propTypes = {
    category: PropTypes.string
};

export default ProductCategoryRow;