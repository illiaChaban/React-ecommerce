import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './MyRouter';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';

let ui = <Provider store={store}><MyRouter /></Provider>



ReactDOM.render(ui, document.getElementById('root'));
