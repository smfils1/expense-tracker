import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

describe("Expense Reducer", () => {
  test("Should generate default state", () => {
    const state = expenseReducer(undefined, {
      type: "@@INIT"
    });
    expect(state).toEqual([]);
  });
  test("Should remove an expense by id", () => {
    const state = expenseReducer(expenses, {
        type:'REMOVE_EXPENSE',
        id:'2'
    });
    expect(state).toEqual([expenses[0],expenses[2]]);
  });
  test("Should not remove an expense by invalid id", () => {
    const state = expenseReducer(expenses, {
        type:'REMOVE_EXPENSE',
        id:''
    });
    expect(state).toEqual(expenses);
  });

  test("Should add an expense", () => {
    const action = {
        type:"ADD_EXPENSE",
        expense:{
            description:'',
            amount:0,
            createdAt:0,
            note:''
        }     
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses.concat(action.expense));
  });

  test("Should  edit an expense by id", () => {
    const description = 'updated d'
    const action = {
        type:'EDIT_EXPENSE',
        updates:{
            description
        },
        id:'1'
    }
    const state = expenseReducer(expenses,action);
    expect(state[0]).toEqual({...expenses[0],description});
    expect(state.slice(1,2)).toEqual(expenses.slice(1,2));
    
  });
  
  test("Should not edit an expense by invalid id", () => {
    const action = {
        type:'EDIT_EXPENSE',
        update:{
            description:'updated d'
        },
        id:''
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
  });



  

  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
  // test('Should ', ()=>{

  // })
});
