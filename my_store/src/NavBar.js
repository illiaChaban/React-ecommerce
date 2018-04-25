import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryMenu from './CategoryMenu';
import LogInBtn from './LogInBtn';
import Cart from './Cart';

let NavBar = () => 
    <div className='header'>
        <Link 
            style={{ textDecoration: 'none', color: 'white' }} 
            to='/'>My_store
        </Link>
        <SearchBar/>
        <CategoryMenu/>
        <LogInBtn/>
        <Cart/>
    </div>

export default NavBar;