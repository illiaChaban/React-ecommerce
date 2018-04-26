import React from 'react';
import { deleteCartItem } from './actions/actions';
import getImageUrl from './lib/getImageUrl';


let CartItem = ({item, dispatch}) => {
    return (
        <div className='cart-item'>
            <img src={getImageUrl({item})} alt='item'/>
            <h3>{item.name}</h3>
            <p>quantity: {item.quantity}</p>
            <button onClick={() => deleteCartItem({item, dispatch})}>cancel</button>
        </div>
    )
}

export default CartItem;