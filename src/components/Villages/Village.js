import React from 'react';

import './Village.css';

const village = props => {
    const villageIdFromProps = props.match.params.village_id;
    const villageFound = props.villages.find(village => village.id === villageIdFromProps);

    return (
        <React.Fragment>
            <p>Поселение: <strong>{villageFound.village_name}</strong></p>
            <p>Описание: {villageFound.village_description}</p>
        </React.Fragment>
    );
};

export default village;