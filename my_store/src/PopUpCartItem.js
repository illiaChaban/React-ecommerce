import React from 'react';
import getImageUrl from './lib/getImageUrl';

let PopUpCartItem = ({item}) => {
    console.log(item)
    return (
        <div>
            <img src={getImageUrl({item})} alt='item'/>
            <p>{item.name}</p>
            <p>quantity: {item.quantity}</p>
        </div>
    )
}

export default PopUpCartItem;