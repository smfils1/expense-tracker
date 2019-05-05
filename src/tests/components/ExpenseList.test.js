import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from "../../components/ExpenseList"
import expenses from "../fixtures/expenses"

describe('<ExpenseList/>',()=>{
    test('Should render empty expense list correctly',()=>{
        const wrapper = shallow(<ExpenseList expenses={[]}/>)
        expect(wrapper).toMatchSnapshot()
    })
    test('Should render expense list correctly',()=>{
        const wrapper = shallow(<ExpenseList expenses={expenses}/>)
        expect(wrapper).toMatchSnapshot()
    })

})