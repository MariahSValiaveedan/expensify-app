import React from'react';
import { connect } from 'react-redux';
import {editexpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import {removeExpense} from '../actions/expenses';

const EditExpensePage= (props) => {
    return (
        <div>
            <ExpenseForm 
            expense = {props.expense}
            onSubmit = {(expense) => {
                props.dispatch(editexpense(props.expense.id,expense));
                props.history.push('/');
              }}    
            />
            <button
             onClick={() =>{
             props.dispatch(removeExpense({id:props.expense.id}));
            }}
            >
            Remove</button>    
        </div>
       );
}

 const mapStateToProps =(state,props) =>{
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
   export default connect(mapStateToProps)(EditExpensePage);