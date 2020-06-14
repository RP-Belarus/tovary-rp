import { GET_PERSONS_BY_VILLAGE_ID } from '../actions/personsActions';

const initialState = {
    persons: [
        { id: 'id01', village_id: 'village01', full_name: 'Иван Иванов', image: 'person-m01.png' },
        { id: 'id02', village_id: 'village01', full_name: 'Пётр Петров', image: 'person-m02.png' },
        { id: 'id03', village_id: 'village01', full_name: 'Михаил Михайлов', image: 'person-m03.png' },
        { id: 'id04', village_id: 'village02', full_name: 'Георгий Горский', image: 'person-m04.png' },
        { id: 'id05', village_id: 'village02', full_name: 'Виктор Витебский', image: 'person-m05.png' },
        { id: 'id06', village_id: 'village02', full_name: 'Виктория Викторова', image: 'person-w01.png' },
        { id: 'id07', village_id: 'village03', full_name: 'Василий Улесский', image: 'person-m06.png' },
        { id: 'id08', village_id: 'village03', full_name: 'Василиса Улесская', image: 'person-w02.png' }
    ]
};

const personsReducer = (state = initialState) => {
    return state;
};

export default personsReducer;