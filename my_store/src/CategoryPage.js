import React from 'react';
import NavBar from './NavBar';
import CategoryName from './CategoryName';
import Items from './Items';

let CategoryPage = (props) => {
    // console.log(props)
    let category = props.match.params.categoryName;

    return (
        <div>
            <NavBar/>
            <CategoryName category={category}/>
            <Items category={category}/>
        </div>
    )
}

export default CategoryPage;