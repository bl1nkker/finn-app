import React, {useState} from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import { useSelector } from 'react-redux'
import TableCalendar from '../tableCalendar/TableCalendar';
import Test from '../popUp/Test';


function SalaryHeader({ handleOpenAddEmployeeModal }) {
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
        <div className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Зарплата</p>
                    <div className='buttons_container'>
                    {/* {showTableCalendar && <TableCalendar handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>}
                        <button onClick={() => handleToggleTableCalendar("start")} className="button">{startDate.toDateString()}</button>
                        <button onClick={() => handleToggleTableCalendar("end")} className="button">{endDate.toDateString()}</button> */}
                        <Test  handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>
                    </div>
                </section>
                
                <section className='right'>
                    <button className="table_create" onClick={handleOpenAddEmployeeModal}><PersonAddIcon className='file_icon'/></button>           
                </section>
            </div>

            <hr />

            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item semimedium'>
                    <span className="item-text bold_text">Сотрудник</span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Должность</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                
                <hr />
                <section className='table_header__filters item extra_small'>
                    <span className="item-text bold_text">Часы</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Ставка</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item extra-small'>
                    <span className="item-text bold_text">%</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Доплата</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">ЗП</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Аванс</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">ЗП  безнал</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Мед КН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Иное</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Бой</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Форма</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Удерж по сверкам</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Штраф</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Итого</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
            </div>
        </div>
    )
}

export default SalaryHeader
