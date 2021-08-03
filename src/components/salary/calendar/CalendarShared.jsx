import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Button from '../../popUp/Button';

const daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

function CalendarShared({handleCloseCalendar, employeesList, handleSaveSharedHours}) {
    const daysInTheMonth = []
    const selectedMonth = 5

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
                        <div key={key} className='content'>
                            <div className='calendar_large_field medium'>
                            <input className='calendar_input' value={employee.full_name} maxlength="2"/>
                            </div>
                            {daysInTheMonth.map((day, key) => 
                                <>
                                    <div className='calendar_field'>
                                        <input className='calendar_input' value='-' maxlength="2"/>
                                    </div>
                                    <hr />
                                </>)}
                                <div className='calendar_field'>
                                    <span className='calendar_text bold_text'>Итого</span>
                                </div>
                        </div>)}
                </div>
                
            </section>

            <hr />
            <section className='calendar_footer'>
                <Button onClickFunc={() => handleSaveSharedHours("Some data")} buttonName="Сохранить" isBlue={true}/>
            </section>
        </div>
    )
}

export default CalendarShared
