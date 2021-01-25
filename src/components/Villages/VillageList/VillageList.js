// См. пример: https://habr.com/ru/post/329996/
import React from 'react';
import { Link } from 'react-router-dom';

import './VillageList.css';

const villageList = props => {
    return (
        <div class="villageList">
            <ul>
                {
                    props.villages.map(village => (
                        <li key={village.id}>
                            <Link to={`/villages/${village.id}`}>
                                {village.village_name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default villageList;