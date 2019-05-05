import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'
import ExpenseForm from "../../components/ExpenseForm"
import expenses from '../fixtures/expenses'

describe('<ExpenseForm/>',()=>{
    test('Should render empty form',()=>{
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper).toMatchSnapshot()
    })   
     test('Should render form w/ expense data',()=>{
        const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('Should pass correct data to onSubmit. Should handle onSubmit with valid data',()=>{
        const onSubmitSpy = jest.fn()
        const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
        expect(wrapper.find('form').simulate('submit',{
            preventDefault: ()=>{}
        }))
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
            description: expenses[0].description,
            amount:parseFloat(expenses[0].amount),
            note:expenses[0].note,
            createdAt: expenses[0].createdAt.valueOf(),
          })
    })

    test('Should render error for invalid form submission. Should handle onSubmit with invalid data',()=>{
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper.find('form').simulate('submit',{
            preventDefault: ()=>{}
        }))
        expect(wrapper.state('error').length).toBeGreaterThan(0)
        expect(wrapper).toMatchSnapshot()
    })



    test('Should render input w/ description on change.Should handle description onChange',()=>{
        const value = 'test'
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper.find('input[name="description"]').simulate('change',{
            target: {value}
        }))
        expect(wrapper.state('description')).toBe(value)
    })

    test('Should render input w/ note on change. Should handle note onChange',()=>{
        const value = 'test'
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper.find('textarea[name="note"]').simulate('change',{
            target: {value}
        }))
        expect(wrapper.state('note')).toBe(value)
    })

    test('Should render input w/ valid amount on change. Should handle amount onChange w/ valid amount by',()=>{
        const value = '1.33'
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper.find('input[name="amount"]').simulate('change',{
            target: {value}
        }))
        expect(wrapper.state('amount')).toBe(value)
    })    
    
    test('Should not render input w/ invalid amount on change',()=>{
        const value = '1.333'
        const wrapper = shallow(<ExpenseForm/>)
        expect(wrapper.find('input[name="amount"]').simulate('change',{
            target: {value}
        }))
        expect(wrapper.state('amount')).toBe('')
    })  

    test('Should set date on date change',()=>{
        const now = moment()
        const wrapper = shallow(<ExpenseForm/>);
        wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
        expect(wrapper.state('createdAt')).toEqual(now)
        
    })    
    
    test('Should set focus on date change',()=>{
        const focused = true;
        const wrapper = shallow(<ExpenseForm/>);
        wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
        expect(wrapper.state('calendarFocused')).toBe(focused)
        
    })
})