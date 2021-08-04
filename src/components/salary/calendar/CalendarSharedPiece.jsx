import React, { useState } from 'react'

function CalendarSharedPiece({ listOfUpdated, obj,setListOfUpdated }) {
    const [currentWorkHours, setCurrentWorkHours] = useState(obj)
    const handleChange = (event) =>{
        setCurrentWorkHours({...currentWorkHours, amount : +event.target.value})
        obj.amount = +event.target.value
        obj.updated = true
        if (!listOfUpdated.find(_obj => _obj.date === obj.date)) setListOfUpdated((prev) => [...prev, obj])
    }
    return (
        <>
            <div className='calendar_field'>
                <input maxLength="2" type="number" max={24} onChange={(event) => handleChange(event)} name={currentWorkHours.date} value={currentWorkHours.amount} className='calendar_input'/>
            </div>
            <hr />
        </>
    )
}

export default CalendarSharedPiece
