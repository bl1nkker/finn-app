import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Button from '../../popUp/Button';
import CalendarPersonalPiece from './CalendarPersonalPiece';

const daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

function CalendarPersonal({handleCloseCalendar, selectedEmployee, handleSavePersonalHours}) {
    const daysInTheMonth = []
    const [workHours, setWorkHours] = useState([])
    const tempWorkHours = []
    const selectedMonth = 7

    for (let day = 0; day < 32 - new Date(2021, selectedMonth, 32).getDate(); day++) {
        daysInTheMonth.push(daysOfTheWeek[new Date(2021, selectedMonth, day).getDay()])
    }
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
        <div className='calendar_container'>
            {/* Calendar header */}
            <section className='calendar_header'>
                <span>{selectedEmployee.full_name}</span>
                <button onClick={handleCloseCalendar}><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
            </section>
            <hr />

            <section className='calendar_table'>
                {/* Calendar table header */}
                <div className='header'>
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
                {/* Calendar table content. Here i need to map throught month and employee.work_hours  */}
                <div className='content calendar_table_content'>
                    {workHours.map((obj, key) => 
                        <CalendarPersonalPiece key={key} obj={obj}/>
                        )}
                        <div className='calendar_field'>
                            <span className='calendar_text bold_text'>{workHours.reduce((acc, curr) => acc += curr.amount, 0)}</span>
                        </div>
                </div>
            </section>

            <hr />
            <section className='calendar_footer'>
                <Button onClickFunc={() => handleSavePersonalHours(workHours)} buttonName="Сохранить" isBlue={true}/>
            </section>
        </div>
    )
}

export default CalendarPersonal
