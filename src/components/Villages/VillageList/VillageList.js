// См. пример: https://habr.com/ru/post/329996/

import React from 'react';
import { Link } from 'react-router-dom';

const villageList = props => {
    return (
        <div>
            <ul>
                {
                    props.villages.map(village => (
                        <li key={village.id}>
                            <Link to={`/villages/${village.id}`}>
                                {village.village_name} : {village.coordinates[0]}, {village.coordinates[1]}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default villageList;