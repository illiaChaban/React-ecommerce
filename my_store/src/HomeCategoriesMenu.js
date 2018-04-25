import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from  'react-redux';
import CategoriesList from './CategoriesList';

let HomeCategoriesMenu = () => 
    <div>
        <h2 className='home-categories'>Categories:</h2>
        <CategoriesList classN='home-categories'/>
        {/* <Link to='/categories/technology'>Technology</Link>
        <Link to='/categories/food_and_beverage'>Food and Beverage</Link>
        <Link to='/categories/educational'>Educational</Link>
        <Link to='/categories/board_games'>Board Games</Link>                */}
    </div>

export default HomeCategoriesMenu;