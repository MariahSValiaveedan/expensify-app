import React from 'react';
import Expenselist from './Expenselist';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage= () => (
    <div>
        
        <ExpenseListFilters />
        <Expenselist />
    </div>
   );
   
   
   export default ExpenseDashboardPage;