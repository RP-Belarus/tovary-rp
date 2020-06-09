import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import personsReducer from './reducers/personsReducer';
import villagesReducer from './reducers/villagesReducer';

export default createStore(
    combineReducers({
        villagesReducer,
        productsReducer,
        personsReducer
    }),
    {}
);