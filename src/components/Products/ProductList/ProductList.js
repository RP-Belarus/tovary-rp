import React from 'react';

import ProductItem from './ProductItem/ProductItem';
import './ProductList.css';

const productList = props => {
    const products = props.products.map(product => {
        return (
            <ProductItem
                key={product.id}
                productId={product.id}
                productTitle={product.title}
                productPrice={product.price}
                productImage={product.image}
            />
        );
    });

    return (<ul className="product__list">{products}</ul>)
};

export default productList;