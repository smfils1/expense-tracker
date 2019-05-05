import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

//Create redux store
export default () => {
  return createStore(
    combineReducers({
      expenses: expenseReducer,
      filter: filterReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
