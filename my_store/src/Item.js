import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_TO_CART } from './actions/actions';
import store from './store'

let addToCart = (item) => {
    store.dispatch({
        type: ADD_TO_CART,
        payload: item,
    })
}

let Item = ({item}) =>
            <div className='item'>
                <Link to={'/items/' + item.id}><img src={item.image}/></Link>
                <div>
                    <h3 className='inline'>{item.name}</h3>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>  
            </div>

export default Item;