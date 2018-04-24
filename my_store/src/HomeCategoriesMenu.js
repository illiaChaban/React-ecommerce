import React from 'react';
import {Link} from 'react-router-dom';

let HomeCategoriesMenu = () => 
    <div className='home-categories'>
        <h2>categories</h2>
        <Link to='/categories/technology'>Technology</Link>
        <Link to='/categories/food_and_beverage'>Food and Beverage</Link>
        <Link to='/categories/educational'>Educational</Link>
        <Link to='/categories/board_games'>Board Games</Link>               
    </div>

export default HomeCategoriesMenu;