import { addExpense,removeExpense,editexpense} from '../../actions/expenses';


test('should setup remove expense', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should setup edit expense', () => {
    const action = editexpense('123abc',{note:'hey'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates : {
            note: 'hey'
        }
    });
});

test('should setup add expense' , () => {
    const expenseData = {
        description:'rent',
        amount:1000,
        createdAt:1000,
        note:'this was last month'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }

    })
});

test('should setup add expense with default values' , () => {

    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description:'',
            note: '' , 
            amount:0,
            createdAt:0
        }

    })

})