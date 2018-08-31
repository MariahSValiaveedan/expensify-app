import moment from 'moment';

const filterReducerDefaultState = {
    text :'',
    sortby:'date',
    startdate:moment().startOf('month'),
    enddate:moment().endOf('month')
}

export default (state = filterReducerDefaultState , action) => {
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