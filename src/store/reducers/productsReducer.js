import { GET_PRODUCTS_BY_VILLAGE_ID } from "../actions/productsActions";

const initialState = {
    products: [
        { id: 'prod01', village_id: 'village01', title: 'Мёд', price: 10 },
        { id: 'prod02', village_id: 'village01', title: 'Орехи', price: 12 },
        { id: 'prod03', village_id: 'village02', title: 'Яблоки', price: 5 }
    ],
    selectedProducts: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BY_VILLAGE_ID:
            state = {
                ...state,
                selectedProducts: state.products.filter(item => item.village_id === action.payload)
            };
            break;
        default:
            return state;
    }
    return state;
};

export default productsReducer;