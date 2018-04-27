import React from 'react';
import { deleteCartItem, updateCart } from './actions/actions';
import getImageUrl from './lib/getImageUrl';
import { connect } from 'react-redux';
import { fetchDeleteCartItem } from './actions/fetch';
import getItemInfo from './lib/getItemInfo';

let deleteCartItemHandler = ({cartItem, user, dispatch}) =>
    fetchDeleteCartItem(cartItem, user)
        .then( () => deleteCartItem({cartItem, dispatch}))

let CartItem = ({cartItem, items, dispatch, user}) => {
    let itemInfo = getItemInfo(cartItem, items);
    return (
        <div className='cart-item'>
            <img src={getImageUrl({item: itemInfo})} alt='item'/>
            <h3>{ itemInfo && itemInfo.title}</h3>
            <div>price: {itemInfo && itemInfo.price}</div>
            <p>quantity: {cartItem.quantity}</p>
            <button onClick={() => deleteCartItemHandler({cartItem, user, dispatch})}>cancel</button>
        </div>
    )
}

export default connect(
    (state, props) => ({
        cartItem: props.item,
        items: state.items,
        user: state.user,
    })
)(CartItem);