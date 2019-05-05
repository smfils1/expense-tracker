import React from "react";
import { connect } from "react-redux";
import uuid from 'uuid'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";


import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDateChange = ({startDate,endDate}) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = (focused) => {
    this.setState(()=>({ calendarFocused: focused }));
  }

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  }
  onSortByChange = e => {
    const filter = e.target.value;
    if (filter === "date") {
      return this.props.sortByDate();
    }
    this.props.sortByAmount();
  }


  render() {
    return (
      <div>
        <input
          name="text"
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          name="sortBy"
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={uuid()}
          endDateId ={uuid()}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDateChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={()=>false}
          showClearDates={true}
        


        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate:() => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
  

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
