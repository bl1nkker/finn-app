import React, {useState} from 'react'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import { useSelector } from 'react-redux'
import TableCalendar from '../tableCalendar/TableCalendar';
import Test from '../popUp/Test';


function RegistryHeader({ startDate, setStartDate, endDate, setEndDate, handleDownloadFile, selectAll, setSelectAll, handleShowPopUp }) {
    const total = useSelector(state => state.invoices.total)
    const not_paid = useSelector(state => state.invoices.not_paid)
    const companiesList = useSelector(state => state.invoices.companiesList)

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
        <div className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Реестр накладных</p>
                    <div className='buttons_container'>
                        {/* {showTableCalendar && <TableCalendar handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>}
                        <button onClick={() => handleToggleTableCalendar("start")} className="button">{startDate.toDateString()}</button>
                        <button onClick={() => handleToggleTableCalendar("end")} className="button">{endDate.toDateString()}</button> */}
                        <Test  handleSetDate={handleSetDate} startDate={startDate} endDate={endDate}/>
                    </div>
                </section>
                
                <section className='right'>
                    <div className="payment_info">
                        <span className="not_paid">Не оплачено: {not_paid}₽</span>
                        <hr />
                        <span className="total">Итог: {total}₽</span>
                    </div>
                    <button className="table_create" onClick={() => handleShowPopUp("create")}><InsertDriveFileOutlinedIcon className='file_icon'/></button>
                    
                </section>
            </div>

            <hr />

            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item extra_small'>
                    <input checked={selectAll.date} type='checkbox' onClick={() => setSelectAll({...selectAll, date:!selectAll.date})}/>
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Дата ТН </span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item extra_small'>
                    <input checked={selectAll.date} type='checkbox' onClick={() => setSelectAll({...selectAll, date:!selectAll.date})}/>
                </section>
                <hr />
                <section className='table_header__filters item medium'>
                    {/* <span className="item-text bold_text">Название А</span> */}
                    <div className="item-text bold_text">
                        <select>
                            <option value='ALL'>Название А</option>
                            {companiesList?.map(companyName => <option value={companyName}>{companyName}</option>) }
                        </select>
                    </div>
                    {/* <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                 */}
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Номер ТН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Тип</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Сумма ТН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">НДС</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item large'>
                    <span className="item-text bold_text">Комментарий</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Статус</span>
                </section>
                <hr />
                <section className='table_header__filters item extra_small'>
                    <button onClick={handleDownloadFile} className='download_button'><SaveAltTwoToneIcon className="icon_download"  fontSize="small"/></button>
                </section>
            </div>
        </div>
    )
}

export default RegistryHeader
