import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from "../../components/AddExpensePage"
import expenses from '../fixtures/expenses'


let onSubmit,history,wrapper
beforeEach(()=>{
    onSubmit = jest.fn()
    history = {
            push: jest.fn()
        }
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
})



describe('<AddExpensePage/>',()=>{
    test('Should render add expense page correctly',()=>{
        expect(wrapper).toMatchSnapshot()
    }) 

    test('Should handle onSubmit',()=>{
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
        expect(onSubmit).toHaveBeenLastCalledWith( expenses[0])
        expect(history.push).toHaveBeenLastCalledWith('/')
    }) 
    
    
    
   
    

})