import React from 'react';
import Header from './Header';
import CategoryName from './CategoryName';
import Items from './Items';

let CategoryPage = (props) => {
    let category = props.match.params.categoryName;

    return (
        <div>
            <Header/>
            <CategoryName category={category}/>
            <Items/>
        </div>
    )
}

export default CategoryPage;