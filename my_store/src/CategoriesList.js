import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import LinkToCategory from './LinkToCategory';

let CategoriesList = ({categories, classN}) => {
    return (
        <div className={classN}>
            {categories.length 
            ?
            categories.map( (ctgr, i) => <LinkToCategory category={ctgr} key={i}/>)
            : []}
            {/* <Link className='category-link' to='/categories/technology'>Technology</Link>
            <Link className='category-link' to='/categories/food_and_beverage'>Food and Beverage</Link>
            <Link className='category-link' to='/categories/educational'>Educational</Link>
            <Link className='category-link' to='/categories/board_games'>Board Games</Link>                */}
        </div>
    )
}

export default connect(
    (state, props) => ({ 
        categories: state.categories,
        classN: props.classN,
    })
)(CategoriesList);