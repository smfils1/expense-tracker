import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from "../../components/NotFoundPage"

describe('<ExpenseDashboard/>',()=>{
    test('Should render not found page correctly',()=>{
        const wrapper = shallow(<NotFoundPage/>)
        expect(wrapper).toMatchSnapshot()
    })
})