import React, {useState} from 'react'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';


function RegistryHeader({ selectAll, setSelectAll }) {
    const [dates, setDates] = useState({ date1:'1 января', date2:'2 января' })
    const [payment, setPayment] = useState({ paid:12345, total:1235 })
    
    return (
        <div className='registry_header'>
            {/* Navigarion + Info */}
            <div className='registry_header__nav'>
                <section className='left'>
                    <p  className='title'>Реестр накладных</p>
                    <div className='buttons_container'>
                        <button className="button">{dates.date1}</button>
                        <button className="button">{dates.date2}</button>
                    </div>
                </section>
                
                <section className='right'>
                    <div className="payment_info">
                        <span className="not_paid">Не оплачено: {payment.paid}₽</span>
                        <hr />
                        <span className="total">Итог: {payment.total}₽</span>
                    </div>
                    <InsertDriveFileOutlinedIcon className='file_icon'/>
                </section>
            </div>

            <hr />

            {/* Filters */}
            <div className='registry_header__filters'>
                <section className='registry_header__filters item extra_small'>
                    <input checked={selectAll.date} type='checkbox' onClick={() => setSelectAll({...selectAll, date:!selectAll.date})}/>
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <span className="item-text">Дата ТН </span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='registry_header__filters item extra_small'>
                    <input checked={selectAll.companyName} type='checkbox' onClick={() => setSelectAll({...selectAll, companyName:!selectAll.companyName})}/>
                </section>
                <hr />
                <section className='registry_header__filters item medium'>
                    <span className="item-text">Название А</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <span className="item-text">Номер ТН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <span className="item-text">Тип</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <span className="item-text">Сумма ТН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <span className="item-text">НДС</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item large'>
                    <span className="item-text">Комментарий</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='registry_header__filters item small'>
                    <input checked={selectAll.status} type='checkbox' onClick={() => setSelectAll({...selectAll, status:!selectAll.status})}/>
                    <span className="item-text">Статус</span>
                </section>
                <hr />
                <section className='registry_header__filters item extra_small'>
                    <button className='download_button'><SaveAltTwoToneIcon className="icon_download"  fontSize="small"/></button>
                </section>
            </div>
        </div>
    )
}

export default RegistryHeader
