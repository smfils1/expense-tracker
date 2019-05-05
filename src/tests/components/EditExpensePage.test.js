import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpenseSpy,
  removeExpenseSpy,
  expense,
  history,
  wrapper,
  match;
beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  history = {
    push: jest.fn()
  };
  expense = expenses[0] 
  match = {
    params: {
      id: expense.id
    }
  };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      match={match}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={history}
    />
  );
});

describe("<EditExpensePage/>", () => {
  test("Should render Edit expense page correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should handle onSubmit", () => {
    const editedExpense = { ...expense }.description = "newD";
    wrapper.find("ExpenseForm").prop("onSubmit")(editedExpense);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, editedExpense);
    expect(history.push).toHaveBeenLastCalledWith("/");
  });

  test("Should handle remove expense onClick", () => {
    wrapper.find("button").simulate("click");
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expense.id);
    expect(history.push).toHaveBeenLastCalledWith("/");
  });
});
