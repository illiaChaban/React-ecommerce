import React from 'react';

let PopUpCartItem = ({item}) => {
    return (
        <div>
            <img src={item.image}/>
            <p>{item.name}</p>
        </div>
    )
}

export default PopUpCartItem;