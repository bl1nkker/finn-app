import React, { useState, useEffect } from 'react';
import BudgetExprenseSubRow from './BudgetExpenseSubRow';
import BudgetIncomeSubRow from './BudgetIncomeSubRow';

function BudgetDataRow({budget, handleOpenBudgetModal}) {

    return (
            <div className={`registry_row budget_row`}>
            <div className="registry_row__left budget_left">
                <section className='registry_row__item item small'>
                    <span className="item-text bold_text">{budget.added_at}</span>     
                </section>

                <section className='budget_income_container'>
                    {budget.incomes.map(income => <BudgetIncomeSubRow key={income.id} handleOpenBudgetModal={handleOpenBudgetModal} income={income}/>)}
                </section>
            </div>
            <div className="registry_row__right budget_right">
                <section className='budget_expense_container'>
                    {budget.expenses.map(expense => <BudgetExprenseSubRow key={expense.id} handleOpenBudgetModal={handleOpenBudgetModal} expense={expense}/>)}
                </section>
            </div>
            
        </div>
    )
}

export default BudgetDataRow
