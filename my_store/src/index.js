import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './MyRouter';
import './index.css';
import store from './store';

import { connect, Provider} from 'react-redux';

// let Screen = connect(
//     state => ({state}),
//     dispatch => ({ dispatch})
// )(MyRouter);

let ui = <Provider store={store}><MyRouter /></Provider>



ReactDOM.render(ui, document.getElementById('root'));
