
// export const LOAD_ITEMS = 'LOAD_ITEMS';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const LOAD_ITEMS = 'LOAD_ITEMS';
const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const LOG_IN_USER = 'LOG_IN_USER';
const UPDATE_CART = 'UPDATE_CART';

export let deleteCartItem = ({cartItem, dispatch}) => {
    dispatch({
        type: DELETE_CART_ITEM,
        payload: cartItem,
    })
}
deleteCartItem.toString = () => DELETE_CART_ITEM;

export let addToCart = ({item, dispatch}) => {
    dispatch({
        type: ADD_TO_CART,
        payload: item,
    })
}
addToCart.toString = () => ADD_TO_CART;

export let loadItems = ({dispatch, items}) => {
    dispatch({
        type: LOAD_ITEMS,
        payload: items,
    })
}
loadItems.toString = () => LOAD_ITEMS;

export let loadCategories = ({dispatch, categories}) => {
    dispatch({
        type: LOAD_CATEGORIES,
        payload: categories,
    })
}
loadCategories.toString = () => LOAD_CATEGORIES;

export let updateCart = ({dispatch, cart}) =>
    dispatch({
        type: UPDATE_CART,
        payload: cart,
    })
updateCart.toString = () => UPDATE_CART;

export let logInUser = ({dispatch, res}) => {
    if (res.user) {
        let userInfo = {
            loggedIn: true,
            jwt: res.jwt,
            userId: res.user._id,
            username: res.user.username,
        }
        console.log(res)
        dispatch({
            type: LOG_IN_USER,
            payload: userInfo
        })
        return userInfo;
    }
    return;   
}
logInUser.toString = () => LOG_IN_USER;

