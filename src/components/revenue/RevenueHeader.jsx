import React, { useState } from 'react'
import TableCalendar from '../tableCalendar/TableCalendar'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';

function RevenueHeader() {
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
        if (event.target.title !== ''){
            const newDate = new Date(event.target.title)
            if (selectedDayPoint === 'start'){setStartDate(newDate)}
            else if (selectedDayPoint === 'end'){setEndDate(newDate)}
            setSelectedDayPoint('')
            setShowTableCalendar(false)

            // Add API call to filter data by date
        }
    }

    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Выручка</p>
                    <div className='buttons_container'>
                        {showTableCalendar && <TableCalendar handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>}
                        <button onClick={() => handleToggleTableCalendar("start")} className="button">{startDate.toDateString()}</button>
                        <button onClick={() => handleToggleTableCalendar("end")} className="button">{endDate.toDateString()}</button>
                    </div>
                </section>
                
                <section className='right'>
                    <button><AddCircleOutlineIcon className='icon_green'/></button>
                    <button><DescriptionOutlinedIcon className='icon_blue'/></button>
                </section>
            </div>
            <hr />
            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Дата ТН </span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Безналичный расчет</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Наличный расчет</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">НП</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Сумма</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Кол-во столов</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Кол-во гостей</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Средний стол</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item oversmall'>
                    <span className="item-text bold_text">Средний гость</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
            </div>
        </section>

    )
}

export default RevenueHeader
