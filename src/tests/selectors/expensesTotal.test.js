import expenses from '../fixtures/expenses'
import  expensesTotal from '../../selectors/expensesTotal'


describe('Get Total Amount from Expenses',()=>{

    test('Should correctly add up zero expense',()=>{
        const result = expensesTotal([])
        expect(result).toEqual(0)
    })
    test('Should correctly add up one expense',()=>{
        const result = expensesTotal([expenses[0]])
        expect(result).toEqual(expenses[0].amount)
    })
    test('Should correctly add up multiple expenses',()=>{
        const result = expensesTotal(expenses)
        expect(result).toEqual(4)
    })
})