import {
    setenddate ,
    setstartdate ,
     sortByAmount ,
     sortByDate,
     setTextFilter 
    }  from '../../actions/filters';
import moment from 'moment';

test('should generate set start date ',() =>{
    const action = setstartdate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startdate:moment(0)
    })
})

test('should generate set end date ',() =>{
    const action = setenddate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        enddate:moment(0)
    })
})

test('should generate sort by amount',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('should generate sort by date',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should generate  text',()=>{
    //const text="rent"
    const action=setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })
} )


test('should generate default text',()=>{
    //const text="rent"
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
} ) 




