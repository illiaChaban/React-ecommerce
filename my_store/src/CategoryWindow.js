import React from 'react';
import { Link } from 'react-router-dom'

let CategoryWindow = () => {
    return (
        <div className='category-window'>
            <Link className='category-link' to='/categories/technology'>Technology</Link>
            <Link className='category-link' to='/categories/food_and_beverage'>Food and Beverage</Link>
            <Link className='category-link' to='/categories/educational'>Educational</Link>
            <Link className='category-link' to='/categories/board_games'>Board Games</Link>               
        </div>
    )
}

export default CategoryWindow;