import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filters1, filters2} from "../fixtures/filters";
import moment  from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters1}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
    
})

describe("<ExpenseListFilters/>", () => {
  test("Should render list filters w/ no start and end date", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should render list filters w/ start and end date", () => {
    wrapper.setProps({
        filter:filters2
    })
    expect(wrapper).toMatchSnapshot();
  });

  test("Should handle text input change", () => {
    const newText = 'newText'
    wrapper.find('input[name="text"]').simulate('change',{
        target:{
           value: newText
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(newText)
  });

  test("Should handle sortBy date change", () => {
    wrapper.setProps({
        filter: filters2
    })
    wrapper.find('select[name="sortBy"]').simulate('change',{
        target:{
           value: "date"
        }
    });
    expect(sortByDate).toHaveBeenCalled()
  });

  test("Should handle sortBy amount change", () => {
    wrapper.find('select[name="sortBy"]').simulate('change',{
        target:{
           value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled()
  });

  test("Should handle date change", () => {
    const startDate = moment(0).add(2,'months')
    const endDate = moment(0).add(3,'months')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
  });


  
  test("Should handle focus change", () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
  });


});
