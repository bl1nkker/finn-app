import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './../../pages/pagesStyles/tableCalendar.css'

function getDates (startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
    while (currentDate <= endDate) {
        dates.push(currentDate)
        currentDate = addDays.call(currentDate, 1)
    }
    return dates
    }

function TableCalendar({startDate, endDate, handleSetDate}) {
    // Usage
    const handler = (date) =>{
        console.log(new Date(date));
    }
    const values = getDates(startDate, endDate)

    return (
        <div className='table_calendar_container'>
            <CalendarComponent onClick={(event) => handleSetDate(event)} values={values} isMultiSelection={true}/>
        </div>
    )
}

export default TableCalendar
