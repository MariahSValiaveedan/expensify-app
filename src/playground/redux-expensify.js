import  {createStore , combineReducers }  from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '' , 
        amount=0,
        createdAt=0
    } = {}) =>( {
    type :'ADD_EXPENSE',
    expense : {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
}); 

const removeExpense = ({id} = {} ) => ({
 type:'REMOVE_EXPENSE' ,
 id
})

const editexpense = (id,updates) => ({
  type :'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = ({text=''}= {} ) => ({
    type : 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setstartdate = (startdate=undefined) => ({
   type:'SET_START_DATE',
   startdate
})

const setenddate = (enddate=undefined) => ({
    type:'SET_END_DATE',
    enddate
 })
const expenseReducerDefaultState= [];

const expenseReducer = (state = expenseReducerDefaultState ,action) => {
    switch (action.type)
    {
        case 'ADD_EXPENSE' :
          return [
            ...state,
            action.expense
        ];    
        case 'REMOVE_EXPENSE' :
          return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE' :
           return state.map ( (expense) => {
               if(expense.id===action.id)
               {
                   return{
                    ...expense,
                    ...action.updates

                   }
                    
               }
               else{
                   return expense;
               }
           })
             
        default : 
          return state;
    }
};



const filterReducerDefaultState = {
    text :'',
    sortby:'date',
    startdate:undefined,
    enddate:undefined}

const filterreducer = (state = filterReducerDefaultState , action) => {
    switch (action.type)
    {
        case 'SET_TEXT_FILTER':
         //return state.map((text) => {
             return{
                 ...state,
                 text : action.text
             }
        case 'SORT_BY_AMOUNT':
          return {
              ...state,
              sortby:'amount'
          }     
        case 'SORT_BY_DATE':
          return {
              ...state,
              sortby:'date'
          }     
        case 'SET_START_DATE' :
          return {
              ...state,
              startdate:action.startdate
          }
        case 'SET_END_DATE' :
          return {
              ...state,
              enddate:action.enddate
          }  
        default :
         return state;
    }
};

const getVisibleExpenses = (expenses,{text,sortby,startdate,enddate}) => {
   return expenses.filter((expense)=>{
      const startdatematch=typeof startdate!=='number'|| expense.createdAt>=startdate;
      const enddatematch = typeof enddate!=='number'|| expense.createdAt<=enddate;;
      const textmatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startdatematch && enddatematch && textmatch;
   }).sort((a,b) => {
      if(sortby=== 'date')
       {
           return a.createdAt<b.createdAt?1:-1
       }
       if(sortby=== 'amount')
       {
           return a.amount<b.amount?1:-1
       }
   })
}

const store = createStore(
    combineReducers({
        expenses :expenseReducer ,
        filters :filterreducer
        

}));

store.subscribe( () => {
    const state=store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const expenseone = store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-21000}))
const expensetwo = store.dispatch(addExpense({description:'hello',amount:300,createdAt:-1000}))

//store.dispatch(removeExpense({id:expenseone.expense.id}));
//store.dispatch(editexpense(expensetwo.expense.id,{amount:600,note:'hey'}))
store.dispatch(setTextFilter({text:'rent'}));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setstartdate(125));
//store.dispatch(setstartdate());
//store.dispatch(setenddate(12500));
//store.dispatch(setEndDate());*/
const demoState = {
  expenses:[{
      id:'kgfumhkj',
      description : 'january rent',
      note:'this was the final amount to be paid ',
      amount : 54500,
      createdAt:0
  }],

  filters : {
      text :'rent',
      sortby : 'amount', 
      startdate :undefined,
      enddate :undefined
  }
};