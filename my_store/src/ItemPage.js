import React from 'react';
// import dummyData from './dummyData';
import NavBar from './NavBar';
import store from './store';

let ItemPage = (props) => {
    // console.log(props)
    let itemId = props.match.params.id;
    let item = store.getState().items.find( item => item.id.toString() === itemId);
    // console.log(item);
    return (
        <div>
            <NavBar/>
            <img className='item-page' src={item.image}/>
            <h3>Description:</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemPage;