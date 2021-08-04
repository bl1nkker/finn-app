import React, { useEffect, useState } from 'react'
import CalendarSharedPiece from './CalendarSharedPiece'

function CalendarSharedEmployeeRow({ listOfUpdated, selectedEmployee, daysInTheMonth, setListOfUpdated }) {
    const [workHours, setWorkHours] = useState([])
    const tempWorkHours = []
    const selectedMonth = 7
    for (let day = 0; day < 32 - new Date(2021, selectedMonth, 32).getDate(); day++) {
        tempWorkHours.push({date: new Date(2021, selectedMonth, day +2).toISOString().substring(0, 10), amount: 0, employee: selectedEmployee.id})
    }
    useEffect(() =>{
        for (let index = 0; index < tempWorkHours.length; index++) {
            // { date:"", amount:"", employee:1 }
            if (selectedEmployee.work_hours.find(obj => obj.date === tempWorkHours[index].date))
            tempWorkHours[index] = selectedEmployee.work_hours.find(obj => obj.date === tempWorkHours[index].date)
        }
        setWorkHours(tempWorkHours)
    }, [selectedEmployee])
    return (
        <div className='content'>
            <div className='calendar_large_field medium'>
                <input className='calendar_input' value={selectedEmployee.full_name} maxlength="2"/>
            </div>
            <hr />
            {workHours.map((obj, key) => 
                <CalendarSharedPiece listOfUpdated={listOfUpdated} setListOfUpdated={setListOfUpdated} obj={obj} key={key}/>)}
                <div className='calendar_field'>
                    <span className='calendar_text bold_text'>Итого</span>
                </div>
        </div>
    )
}

export default CalendarSharedEmployeeRow
