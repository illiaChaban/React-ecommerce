import {createStore} from 'redux';
import dummyData from './dummyData';
import { LOAD_ITEMS, addToCart, deleteCartItem } from './actions/actions';
import { loadItemsReducer, addToCartReducer, deleteCartItemReducer } from './actions/reducerActions';

const dummyState = {
    items: dummyData,
    cart: [dummyData[0], dummyData[2]],

}



let reducers = {
    // LOAD_ITEMS: loadItemsReducer,
    [addToCart]: addToCartReducer,
    [deleteCartItem]: deleteCartItemReducer,
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

