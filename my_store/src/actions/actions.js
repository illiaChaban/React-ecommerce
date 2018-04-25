
// export const LOAD_ITEMS = 'LOAD_ITEMS';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

export let deleteCartItem = ({item, dispatch}) => {
    dispatch({
        type: DELETE_CART_ITEM,
        payload: item,
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
