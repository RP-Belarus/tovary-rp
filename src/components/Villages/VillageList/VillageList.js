// См. пример: https://habr.com/ru/post/329996/
import React from 'react';
//import { Link, useHistory } from 'react-router-dom';

import './VillageList.css';

const VillageList = props => {
    const listItem = "village__list-item";
    const listItemActive = "village__list-item-active";

    // To redirect in React-Router
    //const history = useHistory();

    return (
        <div className="village__list">
            <ul>
                {
                    props.villages.map(village => (
                        <li
                            key={village.id}
                            className={(village.id === props.selected_village) ? listItemActive : listItem}
                        >
                            <div
                                onClick={(e) => {
                                    props.click(village.id, village.coordinates);
                                    //history.push(`/villages/${village.id}`);
                                }}
                            >
                                {village.village_name}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default VillageList;