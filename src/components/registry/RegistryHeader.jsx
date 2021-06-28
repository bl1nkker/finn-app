import React, {useState} from 'react'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import { useSelector } from 'react-redux'


function RegistryHeader({ selectAll, setSelectAll, handleShowPopUp }) {
    const [dates, setDates] = useState({ date1:'1 января', date2:'2 января' })
    const [payment, setPayment] = useState({ not_paid:12345, total:1235 })
    const total = useSelector(state => state.invoices.total)
    const not_paid = useSelector(state => state.invoices.not_paid)
    const companiesList = useSelector(state => state.invoices.companiesList)
    
    return (
        <div className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Реестр накладных</p>
                    <div className='buttons_container'>
                        <button className="button">{dates.date1}</button>
                        <button className="button">{dates.date2}</button>
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
                    <input checked={selectAll.companyName} type='checkbox' onClick={() => setSelectAll({...selectAll, companyName:!selectAll.companyName})}/>
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
                    <input checked={selectAll.status} type='checkbox' onClick={() => setSelectAll({...selectAll, status:!selectAll.status})}/>
                    <span className="item-text bold_text">Статус</span>
                </section>
                <hr />
                <section className='table_header__filters item extra_small'>
                    <button className='download_button'><SaveAltTwoToneIcon className="icon_download"  fontSize="small"/></button>
                </section>
            </div>
        </div>
    )
}

export default RegistryHeader
