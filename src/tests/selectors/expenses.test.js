import {getVisibleExpenses} from '../../selectors/expenses'

import expenses from '../fixtures/expenses'

import moment from 'moment'

describe('Get Visible Expenses',()=>{

    test('Should filter by text',()=>{
        const result = getVisibleExpenses(expenses,{
            text:'2',
            sortBy:'date',
            startDate: undefined,
            endDate: undefined

        })
        expect(result).toEqual([expenses[1]])
    })

    test('Should filter by start date',()=>{
        const result = getVisibleExpenses(expenses,{
            text:'',
            sortBy:'date',
            startDate: moment(0),
            endDate: undefined

        })
        expect(result).toEqual([expenses[0],expenses[2]])
    })

    test('Should filter by end date',()=>{
        const result = getVisibleExpenses(expenses,{
            text:'',
            sortBy:'date',
            startDate:undefined ,
            endDate: moment(0)

        })
        expect(result).toEqual([expenses[2],expenses[1]])
    })

    test('Should filter by date',()=>{
        const result = getVisibleExpenses(expenses,{
            text:'',
            sortBy:'date',
            startDate:undefined ,
            endDate: undefined

        })
        expect(result).toEqual([expenses[0],expenses[2],expenses[1]])
    })

    test('Should filter by amount',()=>{
        const result = getVisibleExpenses(expenses,{
            text:'',
            sortBy:'amount',
            startDate:undefined ,
            endDate: undefined

        })
        expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
    })


})