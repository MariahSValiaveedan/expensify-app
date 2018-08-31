import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter,sortByDate,sortByAmount , setstartdate,setenddate  } from '../actions/filters';

class ExpenseListFilters extends React.Component {
   state = {
       calendarFocused : null
   } 
   onDatesChange= ({startDate,endDate}) => {
        this.props.dispatch(setstartdate(startDate));
        this.props.dispatch(setenddate(endDate));
   };
   onFocusChange = (calendarFocused) => {
       this.setState(() =>({calendarFocused}))
   }
  
    render () {
      return(
        <div>
            <input 
            type="text" 
             value={this.props.filters.text}  
             onChange={(erro) => {
                this.props.dispatch(setTextFilter(erro.target.value));
            }}
           />
           <select value={this.props.filters.sortby} onChange={(erro) => {
                if(erro.target.value === 'date'){
                props.dispatch(sortByDate());
                }
                else if (erro.target.value === 'amount'){
                    this.props.dispatch(sortByAmount());
                    }
            }} >
               <option value='date'>Date</option>
               <option value='amount'>Amount</option>
           </select>
           <DateRangePicker 
           startDate={this.props.filters.startdate}
           endDate={this.props.filters.enddate}
           onDatesChange={this.onDatesChange}
           focusedInput={this.state.calendarFocused}
           onFocusChange={this. onFocusChange}
           numberOfMonths={1}
           isOutsideRange={()=>false}
           showClearDates={true}
           />
        </div>
    )
   }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);