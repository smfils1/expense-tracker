import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";


export class AddExpensePage extends React.Component{
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3>Add Expense</h3>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense))
});

//Connected redux component 
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
