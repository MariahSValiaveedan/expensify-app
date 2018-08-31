import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { addLocale } from 'core-js';


test('should set default', () => {
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id : expenses[1].id
    }
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expense by id if not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id : -1
    }
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
})

test('should add expense ', () => {
    const expense = {
        id:'4',
        description:'mum',
        note:'',
        amount:19500,
        createdAt:0
     };
    const action = {
        type:'ADD_EXPENSE',
        expense
        
    }
    
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2],expense]);
})

test('should edit expense ', () => {
    const amount =17500;
        

    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates :{
            amount
        }
        
    }
    
    const state= expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount)
})

test('should not edit expense ', () => {
    const amount=22000
        

    const action = {
        type:'EDIT_EXPENSE',
        id:-1,
        updates :{
            amount
        }
        
    }
    
    const state= expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})