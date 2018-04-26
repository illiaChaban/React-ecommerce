import getUpdatedQuantityCart from '../lib/getUpdatedQuantityCart';

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

export let deleteCartItemReducer = (oldState, action) => {
    let itemToChange = action.payload;
    let newCart = []; 
    oldState.cart.forEach( item => {
        let copied = { ...item};
        if (copied.id === itemToChange.id) {
            if (copied.quantity > 1) {
                copied.quantity --;
                newCart.push(copied);
            }
        } else { newCart.push(item )}
    })
    return { ...oldState, cart: newCart}
}

export let getCategoriesReducer = (oldState, action) => {
    // console.log(action.payload)
    return { ...oldState, categories: action.payload}
}

export let loadItemsReducer = (oldState, action) => {
    return { ...oldState, items: action.payload}
}

export let logInUserReducer = (oldState, action) => {
    return { ...oldState, user: action.payload}
}