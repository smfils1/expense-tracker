import React from 'react';

import expensesTotal from '../selectors/expensesTotal'
import {connect} from 'react-redux'
import {getVisibleExpenses} from '../selectors/expenses'

export const ExpensesSummary = ({expensesCount=0,expensesTotalAmount=0}) => (
    <div>
        <h3>Viewing {expensesCount} expenses totalling ${expensesTotalAmount}</h3>
    </div>
)

const mapStateToProps = (state) =>{
    const expenses =getVisibleExpenses(state.expenses, state.filter)
    return {
        expensesCount: expenses.length,
        expensesTotalAmount: expensesTotal(expenses) / 100
    }
}

export default connect(mapStateToProps)(ExpensesSummary)

