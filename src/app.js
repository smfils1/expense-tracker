import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import {Provider} from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
import './styles/components/_date-picker.scss'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Redux Store
const store = configStore()

//Provide redux store to all routes
const jsx = (
 <Provider store={store}>
     <AppRouter/>
 </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
