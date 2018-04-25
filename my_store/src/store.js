import {createStore} from 'redux';
import dummyData from './dummyData';
import { LOAD_ITEMS, ADD_TO_CART } from './actions/actions';
import { loadItemsReducer, addToCartReducer } from './actions/reducerActions';

const dummyState = {
    items: dummyData,
    cart: [dummyData[0], dummyData[2]],

}



let reducers = {
    LOAD_ITEMS: loadItemsReducer,
    ADD_TO_CART: addToCartReducer,
}

let reducer = (oldState = dummyState, action) => {
    // console.log(dummyState)
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

