import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default fillter values', () => {
     const state= filtersReducer(undefined,{type: '@@INIT'})
     expect(state).toEqual({
         text:'',
         sortby:'date',
         startdate:moment().startOf('month'),
         enddate:moment().endOf('month')
     })
});

test('should setup sort by amount', () => {
    const state= filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortby).toBe('amount');
        
});


test('should setup sort by date', () => {
    const currentstate = {
        text:'',
        sortby:'amount',
        startdate:undefined,
        enddate:undefined 
    }
    const state= filtersReducer(currentstate,{type: 'SORT_BY_DATE'})
    expect(state.sortby).toBe('date');
        
});


test('should setup text filter', () => {
    
      const  text='hey';
        
    
    const state= filtersReducer(undefined,{type: 'SET_TEXT_FILTER',text})
    expect(state.text).toBe('hey');
        
});

test('should setup startdate', () => {
    
    const  startdate=moment();
      
  
  const state= filtersReducer(undefined,{type: 'SET_START_DATE',startdate})
  expect(state.startdate).toEqual(startdate);
      
});


test('should setup enddate', () => {
    
    const  enddate=moment(0).add(4,'day');
      
  
  const state= filtersReducer(undefined,{type: 'SET_END_DATE',enddate})
  expect(state.enddate).toEqual(enddate);
      
});