import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from "../../components/ExpenseListItem"
import expenses from "../fixtures/expenses"

describe('<ExpenseListItem/>',()=>{
    test('Should render an expense list correctly',()=>{
        const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
        expect(wrapper).toMatchSnapshot()
    })
})