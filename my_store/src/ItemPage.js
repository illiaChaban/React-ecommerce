import React from 'react';
import dummyData from './dummyData';
import Header from './Header';

let ItemPage = (props) => {
    let itemId = props.match.params.id;
    let item = dummyData.find( item => item.id.toString() === itemId);
    console.log(item);
    return (
        <div>
            <Header/>
            <img src={item.image}/>
            <h3>Description:</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemPage;