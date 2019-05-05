import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboard from "../../components/ExpenseDashboard"

describe('<ExpenseDashboard/>',()=>{
    test('Should render expense dashboard list correctly',()=>{
        const wrapper = shallow(<ExpenseDashboard/>)
        expect(wrapper).toMatchSnapshot()
    })
})