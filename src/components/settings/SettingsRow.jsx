import React, { useState, useEffect } from 'react';
import SettingsAccountsSubRow from './SettingsAccountSubRow';
import SettingsCompanySubRow from './SettingsCompanySubRow';

function SettingsDataRow({budget, handleOpenBudgetModal}) {

    return (
        <div className={`data_row`}>
            <div className="subrows_left">
                {budget.incomes.map(income => <SettingsAccountsSubRow key={income.id} handleOpenBudgetModal={handleOpenBudgetModal} income={income}/>)}
            </div>
            <div className="subrows_right">
                {budget.expenses.map(expense => <SettingsCompanySubRow key={expense.id} handleOpenBudgetModal={handleOpenBudgetModal} expense={expense}/>)}
            </div>
            
        </div>
    )
}

export default SettingsDataRow
