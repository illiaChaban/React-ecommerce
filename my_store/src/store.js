import {createStore} from 'redux';
import { addToCart, deleteCartItem, loadCategories, loadItems, logInUser, updateCart } from './actions/actions';
import { addToCartReducer, deleteCartItemReducer, getCategoriesReducer, loadItemsReducer, logInUserReducer } from './actions/reducerActions';

const dummyState = {
    items: [],
    cart: [],
    categories: {},
    user: {
        loggedIn: false,
        jwt: '',
        userId: '',
        username: '',
    }

}

let updateCartReducer = (oldState, action) => {
    console.log('updated cart')
    console.log(action)
    return { ...oldState, cart: action.payload}
}


let reducers = {
    [addToCart]: addToCartReducer,
    [deleteCartItem]: deleteCartItemReducer,
    [loadCategories]: getCategoriesReducer,
    [loadItems]: loadItemsReducer,
    [logInUser]: logInUserReducer,
    [updateCart]: updateCartReducer,
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

