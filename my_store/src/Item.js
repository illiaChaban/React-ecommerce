import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getImageUrl from './lib/getImageUrl';
import ButtonAddToCart from './ButtonAddToCart';


let Item = ({item, dispatch}) =>{
    return (
        <div className='item'>
            <Link to={'/items/' + item.id}>
                <img src={getImageUrl({item})} alt='item pic'
                />
            </Link>
            <div>
                <h3 className='inline'>{item.title}</h3>
                <ButtonAddToCart item={item} dispatch={dispatch}/>
            </div>  
        </div>
    )
}
            

export default connect(
    (state, {item}) => ({item}),
)(Item);