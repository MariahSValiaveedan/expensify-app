import React from'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ConfigureStore from './store/ConfigureStore';
import getVisibleExpenses from './selectors/expenses'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css'; 


const store=ConfigureStore();


const jsx = (
      < Provider store={store}>  
        <AppRouter />
       </ Provider > 
    );

ReactDOM.render(jsx,document.getElementById('app'));






