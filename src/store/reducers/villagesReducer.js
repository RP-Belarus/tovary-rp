
const initialState = {
    villages: [
        {
            id: 'village01',
            village_name: 'Росы',
            village_description: 'Минская область, Воложинский район',
            coordinates: [53.98224, 26.76782]
        },
        {
            id: 'village02',
            village_name: 'Звон-Гора',
            village_description: 'Витебская область, Витебский район',
            coordinates: [55.37060, 30.56975]
        },
        {
            id: 'village03',
            village_name: 'Улесье',
            village_description: 'Витебская область, Докшицкий район',
            coordinates: [54.81975, 28.15401]
        }
    ]
};

const villagesReducer = (state = initialState) => {
    return state;
};

export default villagesReducer;