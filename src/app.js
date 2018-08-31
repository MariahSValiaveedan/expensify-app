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


const store=ConfigureStore();


    

store.dispatch(addExpense({description:'Water Bill', amount:4500}));
store.dispatch(addExpense({description:'Gas Bill',createdAt:1000}))
store.dispatch(addExpense({description:'rent', amount:5500}));



const state=store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);

    const jsx = (
      < Provider store={store}>  
        <AppRouter />
       </ Provider > 
    );

ReactDOM.render(jsx,document.getElementById('app'));





