import React from 'react';
import PopUpCartItem from './PopUpCartItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let PopUpCart = ({cart, items}) => {
    return (
        <div className='cart-popup'>
            {cart.map( (cartItem, i) => 
                <PopUpCartItem 
                    key={i} 
                    cartItem={cartItem} 
                    items={items}
            />)}
            <Link to='/cart' className="boxed-link">
                Checkout
            </Link>
        </div>
    )
}

export default connect(
    state => ({
        cart: state.cart,
        items: state.items,
    })
)(PopUpCart);