import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function AddBudgetHeader({ handleCloseBudgetModal, budgetType }) {
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>Добавить {budgetType === 'expense' ? "расход" : "доход"}</span>
                </div>
                <hr />
            </section>
    )
}

export default AddBudgetHeader
