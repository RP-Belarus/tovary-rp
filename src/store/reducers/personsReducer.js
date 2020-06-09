import { GET_PERSONS_BY_VILLAGE_ID } from '../actions/personsActions';

const initialState = {
    persons: [
        { id: 'id01', village_id: 'village01', full_name: 'Иван Иванов' },
        { id: 'id02', village_id: 'village01', full_name: 'Пётр Петров' },
        { id: 'id03', village_id: 'village02', full_name: 'Горец Горский' },
        { id: 'id04', village_id: 'village03', full_name: 'Василий Улесский' }
    ]
};

const personsReducer = (state = initialState) => {
    return state;
};

export default personsReducer;