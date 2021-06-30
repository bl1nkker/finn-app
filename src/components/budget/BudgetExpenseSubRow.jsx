import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function BudgetExpenseSubRow({expense}) {
    return (
        <div className='registry_subrow budget_subrow'>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{expense.contragent}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{expense.amount}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item underlarge'>
                        <span className="item-text">{expense.description}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{expense.added_by}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <input checked={expense.is_verified} type='checkbox'/>
                    </section>
                    {/* <section className='registry_row__item item extra_small'>
                        <button className='download_button'><CreateTwoToneIcon className="icon_download"  fontSize="small"/></button>
                    </section> */}
                </div>
    )
}

export default BudgetExpenseSubRow
