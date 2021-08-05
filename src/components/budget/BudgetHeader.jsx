import React, { useState } from 'react'
import TableCalendar from '../tableCalendar/TableCalendar'
import Test from '../popUp/Test';

function BudgetHeader({ startDate, setStartDate, endDate, setEndDate, incomeAmount, expenseAmount }) {
    
    const handleSetDate = (event) => {
        // So if user click on arrow button, then date will be invalid
        // (i'm fucking junior if you don't like my solution, fuck off)
        if (event.value){
            setStartDate(new Date(event?.value[0]).toISOString().substring(0, 10))
            setEndDate(new Date(event?.value[1]).toISOString().substring(0, 10))
        }
    }
    
    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Бюджет</p>
                    <div className='buttons_container'>
                        {/* {showTableCalendar && <TableCalendar handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>}
                        <button onClick={() => handleToggleTableCalendar("start")} className="button">{startDate.toDateString()}</button>
                        <button onClick={() => handleToggleTableCalendar("end")} className="button">{endDate.toDateString()}</button> */}
                        <Test  handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>
                    </div>
                </section>
                
                <section className='right'>
                    <span className='budget_text'>{(incomeAmount - expenseAmount)?.toFixed(2)} ₽</span>
                </section>
            </div>
        </section>

    )
}

export default BudgetHeader
