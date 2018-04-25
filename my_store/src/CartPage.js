import React from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';
// import CartItem from './CartItem';
import store from './store';
import { deleteCartItem } from './actions/actions';




let CartItem = ({item, dispatch}) => {
    return (
        <div className='cart-item'>
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p>quantity: {item.quantity}</p>
            <button onClick={() => deleteCartItem({item, dispatch})}>cancel</button>
        </div>
    )
}

let CartPageDumb = ({cart, dispatch}) => {
    console.log(cart)
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