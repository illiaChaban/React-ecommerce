let getUpdatedQuantityCart = (oldState, newItem) => {
    let copiedCart = oldState.cart.slice();
    return copiedCart.map( item => {
            if (item.id === newItem.id) {
                if (item.quantity) {item.quantity ++}
                else item.quantity = 2;
            }
            return item;
        })
}

export default getUpdatedQuantityCart;