import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import HoverText from '../popUp/HoverText';

function RevenueSubRow({ revenue, handleOpenRevenueModal, users }) {
    const [showCreator, setShowCreator] = useState(false)
    return (
        <div onClick={() => handleOpenRevenueModal('edit', revenue)} onMouseOver={() => setShowCreator(true)} onMouseOut={() => setShowCreator(false)} className={`registry_subrow budget_subrow ${showCreator && 'subrow_checked'}`}>
            {showCreator && <HoverText text={users.find(x => x.id === revenue.added_by).full_name}/>}
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
    )
}

export default RevenueSubRow
