import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

 export const ExpenseSummary = ({expenseCount,expenseTotal}) => {
    const expenseword = expenseCount===1?'expense':'expenses';
    const formattedtotal = numeral(expenseTotal/100).format('$0,0.00');
    return ( 
    <div>
         {
                expenseCount === 0? (
                    <h1>No expenses </h1>
                ):(
                    <h1> Viewing {expenseCount} {expenseword} totaling {formattedtotal}</h1>)
          }
              
    </div>
  );
}; 
const mapStateToProps = (state) => {
    
        const visibleExpenses = selectExpenses(state.expenses,state.filters);
        

        return {
            expenseCount : visibleExpenses.length,
            expenseTotal : selectExpensesTotal(visibleExpenses)
        };
    };

export default connect(mapStateToProps)(ExpenseSummary);