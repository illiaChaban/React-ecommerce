import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from './actions/actions';
import store from './store'
import { connect } from 'react-redux';



let Item = ({item, dispatch}) =>{
    return (
        <div className='item'>
            <Link to={'/items/' + item.id}><img src={item.image}/></Link>
            <div>
                <h3 className='inline'>{item.name}</h3>
                <button onClick={() => addToCart({item, dispatch})}>Add to Cart</button>
            </div>  
        </div>
    )
}
            

export default connect(
    (state, {item}) => ({item}),
)(Item);