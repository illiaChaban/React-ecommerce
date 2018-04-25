import React from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';
// import CartItem from './CartItem';

let CartItem = ({item}) => {
    return (
        <div></div>
    )
}

let CartPageDumb = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <NavBar/>
            <div>Hello</div>
            { cart.map( (item, i) => <CartItem item={item} key={i}/>)}
        </div>
    )
}

let CartPage = connect(
    state => ({cart: state.cart})
)(CartPageDumb);



export default CartPage;