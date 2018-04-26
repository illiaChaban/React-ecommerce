import React from 'react';
import { addToCart } from './actions/actions';


let ButtonAddToCart = ({item, dispatch}) => 
    <button onClick={() =>
        addToCart({item, dispatch})}>Add to Cart
    </button>

export default ButtonAddToCart;