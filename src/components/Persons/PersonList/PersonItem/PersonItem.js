import React from 'react';

import './PersonItem.css';

const personItem = props => (
    <li key={props.personId} className="person__list-item" >
        <img src={'./images/' + props.personImage} alt=""/>
        <div>
            {props.personFullName}
        </div>
    </li>
);

export default personItem;