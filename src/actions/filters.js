
   
export   const setTextFilter = (text='') => ({
       type : 'SET_TEXT_FILTER',
       text
   });
   
export    const sortByDate = () => ({
     type: 'SORT_BY_DATE'
   })
   
export  const sortByAmount = () => ({
       type: 'SORT_BY_AMOUNT'
   });
   
   export    const setstartdate = (startdate) => ({
      type:'SET_START_DATE',
      startdate
   })
   
   export    const setenddate = (enddate) => ({
       type:'SET_END_DATE',
       enddate
    })