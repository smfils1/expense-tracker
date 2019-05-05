//Default States
const expensesDefaultState = [];

//Reducers
export default (state = expensesDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id){
                    return {...expense,...action.updates}
                }
                return expense
            })
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
            
        default:
            return state
    }
}