import React from 'react';

import './PersonItem.css';

const personItem = props => (
    <li key={props.personId} className="person__list-item" >
        <div>
            {props.personFullName}
        </div>
    </li>
);

export default personItem;