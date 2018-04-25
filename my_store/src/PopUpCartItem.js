import React from 'react';

let PopUpCartItem = ({item}) => {
    return (
        <div>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>quantity: {item.quantity}</p>
        </div>
    )
}

export default PopUpCartItem;