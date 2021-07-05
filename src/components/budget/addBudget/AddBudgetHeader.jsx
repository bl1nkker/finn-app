import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function AddBudgetHeader({ handleDeleteBudget, modalMethod, budgetType }) {
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавить" : "Изменить"} {budgetType === 'expense' ? "расход" : "доход"}</span>
                    {modalMethod === 'edit' && <button onClick={handleDeleteBudget} className="delete">Удалить</button>}
                </div>
                <hr />
        </section>
    )
}

export default AddBudgetHeader
