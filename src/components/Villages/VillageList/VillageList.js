// См. пример: https://habr.com/ru/post/329996/
import React from 'react';

import './VillageList.css';

const VillageList = props => {
    const listItem = "village__list-item";
    const listItemActive = "village__list-item-active";

    return (
        <div className="village__list">
            <ul>
                {
                    props.villages.map(village => (
                        <li
                            key={village.id}
                            className={(village.id === props.selectedVillageId) ? listItemActive : listItem}
                        >
                            <div
                                onClick={() => {
                                    props.onVillageClick(village.id);
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