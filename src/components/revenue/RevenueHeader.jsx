import React, { useState } from 'react'
import TableCalendar from '../tableCalendar/TableCalendar'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import Test from '../popUp/Test';

function RevenueHeader({ startDate, setStartDate, endDate, setEndDate, handleOpenRevenueModal, handleDownloadInExcel }) {

    const handleSetDate = (event) => {
        // So if user click on arrow button, then date will be invalid
        // (i'm fucking junior if you don't like my solution, fuck off)
        if (event.value){
            setStartDate(new Date(event?.value[0]).toISOString().substring(0, 10))
            setEndDate(new Date(event?.value[1]).toISOString().substring(0, 10))
        }

        // Add API call to filter data by date
    }

    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Выручка</p>
                    <div className='buttons_container'>
                        {/* Variant 1 */}

                        {/* Variant 2 */}
                        <Test  handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>
                    </div>
                </section>
                
                <section className='right'>
                    <button onClick={() => handleOpenRevenueModal('create', null)}><AddCircleOutlineIcon className='icon_green'/></button>
                    <button onClick={handleDownloadInExcel}><DescriptionOutlinedIcon className='icon_blue'/></button>
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
