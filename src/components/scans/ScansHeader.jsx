import React, { useState } from 'react'
import TableCalendar from '../tableCalendar/TableCalendar'
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import Test from '../popUp/Test';

function ScansHeader({ startDate, setStartDate, endDate, setEndDate, handleOpenScanModal, handleDownloadScans, handleCheckAllScans }) {
    const docTypes = ["Накладные", "Учет"]
    const [checkAllFiles, setCheckAllFiles] = useState(false)

    const handleSetDate = (event) => {
        // So if user click on arrow button, then date will be invalid
        // (i'm fucking junior if you don't like my solution, fuck off)
        if (event.value){
            setStartDate(new Date(event?.value[0]).toISOString().substring(0, 10))
            setEndDate(new Date(event?.value[1]).toISOString().substring(0, 10))
        }
    }

    const handleCheckBox = () =>{
        setCheckAllFiles(!checkAllFiles)
        handleCheckAllScans(checkAllFiles)
    }
    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Сканы</p>
                    <div className='buttons_container'>
                        {/* {showTableCalendar && <TableCalendar handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>}
                        <button onClick={() => handleToggleTableCalendar("start")} className="button">{startDate.toDateString()}</button>
                        <button onClick={() => handleToggleTableCalendar("end")} className="button">{endDate.toDateString()}</button> */}
                        <Test  handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>
                    </div>
                </section>
                
                <section className='right'>
                    <button onClick={() => handleOpenScanModal('create', null)}><NoteAddOutlinedIcon className='icon_blue'/></button>
                </section>
            </div>
            <hr />
            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item large'>
                    <span className="item-text bold_text">Дата</span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item semilarge'>
                    <div className="item-text bold_text">
                        <select>
                            <option value='ALL'>Тип документа</option>
                            {docTypes?.map((companyName, key) => <option key={key} value={companyName}>{companyName}</option>) }
                        </select>
                    </div>               
                </section>
                <hr />
                <section className='table_header__filters item large'>
                    <span className="item-text bold_text">Файл</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semilarge'>
                    <button onClick={handleDownloadScans}><SaveAltTwoToneIcon className="icon_download" fontSize="small"/></button>
                </section>
            </div>
        </section>

    )
}

export default ScansHeader
