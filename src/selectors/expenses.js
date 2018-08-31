import moment from 'moment';


export default  (expenses,{text,sortby,startdate,enddate}) => {
    return expenses.filter((expense)=>{
       const createdatmoment = moment(expense.createdAt); 
       const startdatematch=startdate?startdate.isSameOrBefore(createdatmoment,'day') :true
       const enddatematch = enddate?enddate.isSameOrAfter(createdatmoment,'day') :true
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