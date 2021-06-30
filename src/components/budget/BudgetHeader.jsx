import React, { useState } from 'react'

function BudgetHeader() {
    const [dates, setDates] = useState({ date1:'1 января', date2:'2 января' })
    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Бюджет</p>
                    <div className='buttons_container'>
                        <button className="button">{dates.date1}</button>
                        <button className="button">{dates.date2}</button>
                    </div>
                </section>
                
                <section className='right'>
                    <span className='budget_text'>12356. 00 RUB</span>
                </section>
            </div>
        </section>

    )
}

export default BudgetHeader
