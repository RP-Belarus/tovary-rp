
const initialState = {
    villages: [
        { id: 'village01', village_name: 'Росы', village_description: 'Минская область, Воложинский район' },
        { id: 'village02', village_name: 'Звон-Гора', village_description: 'Витебская область, Витебский район' },
        { id: 'village03', village_name: 'Улесье', village_description: 'Витебская область, Докшицкий район' }
    ]
};

const villagesReducer = (state = initialState) => {
    return state;
};

export default villagesReducer;