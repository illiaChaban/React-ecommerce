import React from 'react';
import getImageUrl from './lib/getImageUrl';
import getItemInfo from './lib/getItemInfo';

let PopUpCartItem = ({cartItem ,items}) => {
    let item = getItemInfo(cartItem, items);
    return (
        <div>
            <img src={getImageUrl({item})} alt='item'/>
            <p>{item.title}</p>
            <p>quantity: {item.quantity}</p>
        </div>
    )
}

export default PopUpCartItem;