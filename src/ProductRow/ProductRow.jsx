import React from 'react';
import PropTypes from 'prop-types';

const ProductRow = props => {

    var {name, price, isOnStock} = props;
    var nameValue = "";

    nameValue = (isOnStock) ? <td>{name}</td> 
                            : <td><span style={{"color":"red"}}>{name}</span></td>

    return (
        <tr>
            {nameValue}
            <td>{price}</td>
        </tr>
    );
};

ProductRow.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    isOnStock : PropTypes.bool
};

export default ProductRow;