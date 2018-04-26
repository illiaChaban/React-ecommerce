import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';


let ItemsD = ({items, category}) => {
    return (
        <div>
            {items && 
                items
                    .filter( item => {
                        if (category) return item.category.title === category;
                        return item;
                    })
                    .map( (item, i) => <Item key={i} item={item}/>)
            }
        </div>
    )
}

let Items = connect(
    (state, props) => ({items: state.items, category: props.category}),
)(ItemsD);

export default Items;
