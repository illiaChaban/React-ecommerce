import getUpdatedQuantityCart from '../lib/getUpdatedQuantityCart';

export let loadItemsReducer = (oldState, action) => {
    return oldState;
}

export let addToCartReducer = (oldState, action) => {
    let newItem = action.payload;
    let newCart;
    if (oldState.cart.find( item => item.id === newItem.id)) {
        newCart = getUpdatedQuantityCart(oldState, newItem)    
    } else {
        newItem.quantity = 1;
        newCart = oldState.cart.concat(action.payload); 
    }
    
    return { ...oldState, cart: newCart};
}