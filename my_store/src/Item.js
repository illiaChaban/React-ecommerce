import React from 'react';

let Item = ({item}) => 
    <div className='item'>
        <img src={item.image}/>
        <h3>{item.name}</h3>        
    </div>

export default Item;