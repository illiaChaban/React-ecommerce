import React from 'react';
import PopUpCartItem from './PopUpCartItem';
import { Link } from 'react-router-dom';


let PopUpCart = ({cart}) => {
    return (
        <div className='cart-popup'>
            {cart.map( (item, i) => <PopUpCartItem key={i} item={item}/>)}
            <Link to='/cart' className="boxed-link">
                Checkout
            </Link>
        </div>
    )
}

export default PopUpCart;