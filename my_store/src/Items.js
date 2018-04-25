import React from 'react';
import Item from './Item';
import dummyData from './dummyData';
import store from './store';


let Items = ({category}) => {
    let items = store.getState().items;
    return (
        <div>
            {
                items ? 
                items
                .filter( item => item.category === category)
                .map( (item, i) => <Item key={i} item={item}/>) 
                : []
            }
        </div>
    )
}

export default Items;