import {createStore} from 'redux';
import dummyData from './dummyData';
import { addToCart, deleteCartItem } from './actions/actions';
import { addToCartReducer, deleteCartItemReducer, getCategoriesReducer } from './actions/reducerActions';
import GetCategories from './GetCategories';

const dummyState = {
    items: dummyData,
    cart: [dummyData[0], dummyData[2]],
    categories: {}

}



let reducers = {
    // LOAD_ITEMS: loadItemsReducer,
    [addToCart]: addToCartReducer,
    [deleteCartItem]: deleteCartItemReducer,
    GET_CATEGORIES: getCategoriesReducer,
}

let reducer = (oldState = dummyState, action) => {
    if (reducers[action.type]) {
        let newState = reducers[action.type](oldState, action);
        console.log('newState: ', newState);
        return newState;
    }
    return oldState;    
}

let store = createStore(reducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

