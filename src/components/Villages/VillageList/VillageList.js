// См. пример: https://habr.com/ru/post/329996/
import React from 'react';
import { Link } from 'react-router-dom';

import './VillageList.css';

const VillageList = props => {
    const listItemClass = "village_list-item-active";

    return (
        <div className="village__list">
            <ul>
                {
                    props.villages.map(village => (
                        <li key={village.id} className={(village.id === props.selected_village) ? listItemClass : ''}>
                            <Link
                                to={`/villages/${village.id}`}
                                onClick={() => {
                                    props.click(village.id, village.coordinates);
                                }}
                            >
                                {village.village_name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default VillageList;