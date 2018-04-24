import React from 'react';
import { Link } from 'react-router-dom';

let Item = ({item}) => 
    <Link to={'/items/' + item.id}>
        <div className='item'>
            <img src={item.image}/>
            <h3>{item.name}</h3>        
        </div>
    </Link>

export default Item;