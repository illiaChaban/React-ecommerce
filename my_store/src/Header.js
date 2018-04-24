import React from 'react';
import {Link} from 'react-router-dom';

let Header = () => 
    <div className='header'>
        <Link 
            style={{ textDecoration: 'none', color: 'white' }} 
            to='/'>My_store
        </Link>
        <SearchBar/>
        <CategoryMenu/>
        <LogInBtn/>
    </div>

export default Header;