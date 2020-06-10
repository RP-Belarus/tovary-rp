import React from 'react';

import './Village.css';
import PersonList from '../Persons/PersonList/PersonList';
import ProductList from '../Products/ProductList/ProductList';

const village = props => {
    const villageIdFromProps = props.match.params.village_id;
    const villageFound = props.villages.find(village => village.id === villageIdFromProps);

    return (
        <React.Fragment>
            <p>Поселение: <strong>{villageFound.village_name}</strong></p>
            <p>Описание: {villageFound.village_description}</p>

            <p>Жители поселения:</p>
            <PersonList persons={props.persons.filter(person => person.village_id === villageIdFromProps)} />

            <p>Продукция поселения:</p>
            <ProductList products={props.products.filter(product => product.village_id === villageIdFromProps)} />
        </React.Fragment>
    );
};

export default village;