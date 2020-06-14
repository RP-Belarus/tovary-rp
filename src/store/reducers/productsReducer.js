import { GET_PRODUCTS_BY_VILLAGE_ID } from "../actions/productsActions";

const initialState = {
    products: [
        { id: 'prod01', village_id: 'village01', title: 'Мёд', price: 10, image: 'products-honey.jpg' },
        { id: 'prod02', village_id: 'village01', title: 'Орехи', price: 12, image: 'products-nuts.jpg' },
        { id: 'prod03', village_id: 'village01', title: 'Малина', price: 5, image: 'products-malina.jpg' },
        { id: 'prod04', village_id: 'village01', title: 'Ложки', price: 15, image: 'products-lozhki.jpg' },
        { id: 'prod05', village_id: 'village01', title: 'Хлеб бездрожжевой', price: 5, image: 'products-hleb.jpg' },
        { id: 'prod06', village_id: 'village02', title: 'Яблоки', price: 5, image: 'products-apple.jpg' },
        { id: 'prod07', village_id: 'village02', title: 'Груши', price: 7, image: 'products-grusha.jpg' },
        { id: 'prod08', village_id: 'village02', title: 'Картофель', price: 3, image: 'products-kartofel.jpg' },
        { id: 'prod09', village_id: 'village02', title: 'Платье', price: 100, image: 'products-dress.jpg' },
        { id: 'prod10', village_id: 'village03', title: 'Сливы', price: 5, image: 'products-sliva.jpg' },
        { id: 'prod11', village_id: 'village03', title: 'Чай травяной', price: 10, image: 'products-herb.jpg' }
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