import React from 'react';
import Item from './Item';
import dummyData from './dummyData';

let Items = () => {
    let items = dummyData;
    return (
        <div>
            {items ? items.map( (item, i) => <Item key={i} item={item}/>) : []}
        </div>
    )
}

export default Items;