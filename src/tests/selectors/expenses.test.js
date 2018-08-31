import selectExpenses from '../../selectors/expenses';
import { isMoment } from '../../../node_modules/moment';
import moment from 'moment';
import expenses from '../fixtures/expenses';




test('should filter by text value' , () => {
    const filters ={
        text :'e',
        sortby:'date',
        startdate:undefined,
        enddate:undefined
};
 const result = selectExpenses(expenses,filters);
 expect(result).toEqual([expenses[2],expenses[1]]);
})




test('should filter by startdate',() =>{
    const filters ={
        text :'',
        sortby:'date',
        startdate:moment(0),
        enddate:undefined 
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
})


test('should filter by enddate',() =>{
    const filters ={
        text :'',
        sortby:'date',
        startdate:undefined,
        enddate:moment(0).add(2,'day') 
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
})

test('should filter by amount',() =>{
    const filters ={
        text :'',
        sortby:'amount',
        startdate:undefined,
        enddate:undefined 
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
})

test('should filter by date',() =>{
    const filters ={
        text :'',
        sortby:'date',
        startdate:undefined,
        enddate:undefined 
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})



