import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function RevenueSubRow({ revenue }) {

    const total = revenue.cash_income + revenue.cash_free_income + revenue.np

    return (
        <>
        <div className={`registry_subrow budget_subrow`}>
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.cash_income}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.cash_free_income}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.np}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.total}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.tables}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.guests}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.average_table}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className="item-text">{revenue.average_guest}</span>
                    </section>
                </div>
        </>
    )
}

export default RevenueSubRow
