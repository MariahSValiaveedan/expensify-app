import React from 'react';
import Expenselist from './Expenselist';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage= () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <Expenselist />
    </div>
   );
   
   
   export default ExpenseDashboardPage;