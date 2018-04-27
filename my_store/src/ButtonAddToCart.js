import React from 'react';
import { addToCart } from './actions/actions';
import { connect } from 'react-redux';
import { fetchGetItemsInCart } from './actions/fetch';
import { updateCart } from './actions/actions';




let ButtonAddToCart = ({item, user, dispatch}) => {
    // console.log(item)
    
    return (
        <button onClick={() => {
            fetch('https://etsetera.herokuapp.com/cartItem', {
                headers: {
                    "Content-Type":'application/json',
                    "Authorization": "Bearer " + user.jwt 
                },
                method: 'POST',
                body: JSON.stringify({
                    quantity: 1,
                    productId: item.id,
                    userId: user.userId,
                })
            })
                .then( res => res.json())
                // 
                .then( res => res.quantity && fetchGetItemsInCart({user}))
                .then( res => {
                    console.log(res)
                    updateCart({dispatch, cart: res})
                })
    
    
            // addToCart({item, dispatch})
        }
            }>Add to Cart
        </button>
    )
}
    

export default connect(
    (state, props) => ({
        user: state.user,
        item: props.item,
    })
)(ButtonAddToCart);   ///// ({state.user}) => ({user})