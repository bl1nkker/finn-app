import React, { useState, useEffect } from 'react'

function ScansSubRow({ scan, handleOpenRevenueModal }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div onClick={() => handleOpenRevenueModal('edit', scan)} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className={`registry_subrow budget_subrow ${isHover && 'subrow_checked'}`}>
            <section className='registry_row__item item semilarge'>
                <span className="item-text">{scan.type_scan}</span>
            </section>
            <hr />
            <section className='registry_row__item item large'>
                <span className="item-text">{scan.name}</span>
            </section>
            <hr />
            <section className='registry_row__item item semilarge'>
                <input type='checkbox'/>
            </section>
        </div>
    )
}

export default ScansSubRow
