import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function BudgetIncomeSubRow({income, handleOpenBudgetModal}) {
    const [currentIncome, setCurrentIncome] = useState(income)
    return (
        <>
        <div className={`registry_subrow budget_subrow`}>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{currentIncome.contragent}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{currentIncome.amount}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{currentIncome.description}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{currentIncome.added_by}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <input checked={currentIncome.is_verified} type='checkbox'/>
                    </section>
                    <hr />
                    <section className='registry_row__item item mini'>
                        <button onClick={() => handleOpenBudgetModal("income", "edit", income)} className='download_button'><CreateTwoToneIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
        </>
    )
}

export default BudgetIncomeSubRow
