import React from "react";
import { connect } from "react-redux";
import ListItem from "./ExpenseListItem";
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpenseList = ({expenses}) => (
  <div>
    <h1>Expenses</h1>
    {
      expenses.length === 0 ? <p>No Expenses</p> :
      expenses.map(item => (
      <ListItem {...item} key={item.id} />   
    ))
    }    
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filter)
});

export default connect(mapStateToProps)(ExpenseList);
