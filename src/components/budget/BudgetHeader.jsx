import React, { useState } from 'react'
import TableCalendar from '../tableCalendar/TableCalendar'
import Test from '../popUp/Test';

function BudgetHeader({ incomeAmount, expenseAmount }) {
    const [showTableCalendar, setShowTableCalendar] = useState(false)
    // start, end
    const [selectedDayPoint, setSelectedDayPoint] = useState('')
    // Select current month (first day and last day)
    const date = new Date();
    const [startDate, setStartDate] = useState(new Date(date.getFullYear(), date.getMonth(), 1))
    const [endDate, setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0))

    const handleToggleTableCalendar = (dayType) =>{
        setShowTableCalendar(!showTableCalendar)
        setSelectedDayPoint(dayType)
    }

    const handleSetDate = (event) => {
        // So if user click on arrow button, then date will be invalid
        // (i'm fucking junior if you don't like my solution, fuck off)
        console.log(event)
        setStartDate(event.value[0])
        setEndDate(event.value[1])

        // Add API call to filter data by date
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
                    <span className='budget_text'>{(incomeAmount - expenseAmount).toFixed(2)} ₽</span>
                </section>
            </div>
        </section>

    )
}

export default BudgetHeader
