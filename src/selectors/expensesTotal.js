
const totalAmount = (currentTotal, currentAmount) => currentTotal + currentAmount;
export default (expenses) => expenses.map(expense => expense.amount).reduce(totalAmount,0)
