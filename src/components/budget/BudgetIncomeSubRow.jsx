import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function BudgetIncomeSubRow({income}) {
    return (
        <div className={`registry_subrow budget_subrow`}>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{income.contragent}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{income.amount}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{income.description}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <span className="item-text">{income.added_by}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item small'>
                        <input checked={income.is_verified} type='checkbox'/>
                    </section>
                    <hr />
                    {/* <section className='registry_row__item item extra_small'>
                        <button className='download_button'><CreateTwoToneIcon className="icon_download"  fontSize="small"/></button>
                    </section> */}
                </div>
    )
}

export default BudgetIncomeSubRow
