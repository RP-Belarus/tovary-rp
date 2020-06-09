import React from 'react';

import './ProductItem.css';

const productItem = props => (
    <li key={props.productId} className="product__list-item">
        <div>
            <strong>{props.productTitle}</strong> - {props.productPrice} рублей
        </div>
    </li>
);

export default productItem;