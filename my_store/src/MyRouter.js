import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

let MyRouter = () => {
    // console.log(props)
    return (
        <Router>
            <div>
                <Route path='/' exact component={HomePage}/>
                <Route path='/categories/:categoryName' component={CategoryPage}/>
                <Route path='/items/:id' component={ItemPage}/>
                <Route path='/cart' component={CartPage}/>
            </div>
        </Router>
    )
}

export default MyRouter;

