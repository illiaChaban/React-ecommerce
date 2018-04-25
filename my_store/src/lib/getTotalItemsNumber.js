let getTotalItemsNumber = (cart) => {
    let count = 0;
    cart.forEach( item => count += item.quantity)
    return count;
}

export default getTotalItemsNumber;