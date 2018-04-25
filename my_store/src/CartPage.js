import React from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import CartItem from './CartItem';

let CartPageDumb = ({cart, dispatch}) => {
    return (
        <div>
            <NavBar/>
            <div>Hello</div>
            { cart.map( (item, i) => <CartItem dispatch={dispatch} item={item} key={i}/>)}
        </div>
    )
}

let CartPage = connect(
    state => ({cart: state.cart})
)(CartPageDumb);



export default CartPage;