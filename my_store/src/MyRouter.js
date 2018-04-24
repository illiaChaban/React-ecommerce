import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import ItemPage from './ItemPage';

let MyRouter = () => 
    <Router>
        <div>
            <Route path='/' exact component={HomePage}/>
            <Route path='/categories/:categoryName' component={CategoryPage}/>
            <Route path='/items/:id' component={ItemPage}/>
        </div>
    </Router>

export default MyRouter;

