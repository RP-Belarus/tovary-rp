import React from 'react';

import PersonItem from './PersonItem/PersonItem';
import './PersonList.css';

const personList = props => {
    const persons = props.persons.map(person => {
        return (
            <PersonItem
                key={person.id}
                personId={person.id}
                personVillageId={person.village_id}
                personFullName={person.full_name}
            />
        );
    });

    return (<ul className="person__list">{persons}</ul>)
};

export default personList;