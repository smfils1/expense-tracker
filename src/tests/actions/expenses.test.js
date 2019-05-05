import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

describe('Expense Actions',()=>{

    test('Should generate remove expense action object', ()=>{
        const action = removeExpense("123")
        expect(action).toEqual({
            type:'REMOVE_EXPENSE',
            id:'123'
        })
    })

    test('Should generate edit expense action object', ()=>{
        const action = editExpense("123",{
            description:'abc'
        })
        expect(action).toEqual({
            type:'EDIT_EXPENSE',
            updates:{
                description:'abc'
            },
            id:'123'
        })
    })

    test('Should generate add expense action object', ()=>{
        const action = addExpense({
            description:'abc',
            amount:2,
            createdAt:0,
            note:'notes1'
        })
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                description:'abc',
                amount:2,
                createdAt:0,
                note:'notes1',
                id: expect.any(String)
            }
        })
    })

    test('Should generate add expense action default object ', ()=>{
        const action = addExpense()
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                description:'',
                amount: 0,
                createdAt:0,
                note:'',
                id: expect.any(String)

            }
        })
    })    
})
