let getItemInfo = (cartItem, items) => {
    return items.find( itm => itm.id === cartItem.productId)
}

export default getItemInfo;