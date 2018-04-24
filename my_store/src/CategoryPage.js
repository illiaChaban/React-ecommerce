import React from 'react';
import LogInBtn from './LogInBtn';

let SearchBar = () => 
    <div>
        <input className='search-bar'/>
        <button>Search</button>
    </div>

let Header = () => 
    <div className='header'>
        <div>My_store</div>
        <SearchBar/>
        <LogInBtn/>
    </div>

let CategoryName = () => 
    <div>categoryName</div>

let CategoryMenu = () => 
    <div>categoryMenu</div>

let Items = () => 
    <div>Items</div>


let CategoryPage = (props) => {
    let category = props.match.params.categoryName;

    return (
        <div>
            <Header/>
            <CategoryName/>
            <CategoryMenu/>
            <Items/>
        </div>
    )
}

export default CategoryPage;