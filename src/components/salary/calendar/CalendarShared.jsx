import React, { useState } from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Button from '../../popUp/Button';
import CalendarSharedEmployeeRow from './CalendarSharedEmployeeRow';

const daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

function CalendarShared({handleCloseCalendar, employeesList, handleSaveSharedHours}) {
    const [listOfUpdated, setListOfUpdated] = useState([])
    const daysInTheMonth = []
    const selectedMonth = 7

    for (let day = 0; day < 32 - new Date(2021, selectedMonth, 32).getDate(); day++) {
        daysInTheMonth.push(daysOfTheWeek[new Date(2021, selectedMonth, day).getDay()])
    }

    return (
        <div className='calendar_container'>
            {/* Calendar header */}
            <section className='calendar_header'>
                <span>Кол-во отработанных часов</span>
                <button onClick={handleCloseCalendar}><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
            </section>
            <hr />

            <section className='calendar_table'>
                {/* Calendar table header */}
                <div className='header'>
                    <div className='calendar_large_field medium'>
                        <span className='calendar_text'>Сотрудник</span>
                    </div>
                    <hr />
                    {daysInTheMonth.map((day, key) => 
                        <>
                            <div className='calendar_field'>
                                <span className='calendar_text'>{key + 1}</span>
                                <span className='calendar_text'>{day}</span>
                            </div>
                            <hr />
                        </>)}
                        <div className='calendar_field'>
                            <span className='calendar_text bold_text'>Итого</span>
                        </div>
                </div>
                <hr />
                {/* Calendar table content */}
                <div className='calendar_table_content'>
                    {employeesList.map( (employee, key) => 
                        <CalendarSharedEmployeeRow listOfUpdated={listOfUpdated} setListOfUpdated={setListOfUpdated} selectedEmployee={employee} daysInTheMonth={daysInTheMonth} key={key} />)}
                </div>
                
            </section>

            <hr />
            <section className='calendar_footer'>
                <Button onClickFunc={() => handleSaveSharedHours(listOfUpdated)} buttonName="Сохранить" isBlue={true}/>
            </section>
        </div>
    )
}

export default CalendarShared
