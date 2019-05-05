import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'


describe('<ExpensesSummary>',()=>{

    test('Should correctly render ExpenseSummary w/ zero expense by default',()=>{
        const wrapper = shallow(<ExpensesSummary/>)
        expect(wrapper).toMatchSnapshot()
    })
    test('Should correctly render ExpenseSummary w/ one expense',()=>{
        const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotalAmount={100}/>)
        expect(wrapper).toMatchSnapshot()
    })
    test('Should correctly render ExpenseSummary w/ multiple expenses',()=>{
        const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotalAmount={100}/>)
        expect(wrapper).toMatchSnapshot()
    })
})