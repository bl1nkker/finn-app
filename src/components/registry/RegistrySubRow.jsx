import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function RegistrySubRow({invoice, handleShowPopUp, selectRow, setSelectRow, childSelected, setChildSelected}) {
    const [selectSubrow, setSelectSubrow] = useState({date:false, companyName:false, status:false})
    useEffect(() =>{
        setSelectSubrow({...selectSubrow, companyName:selectRow.date})
        console.log(selectRow);
    },[selectRow])

    return (
        <div className={`registry_subrow ${selectSubrow.companyName && "subrow_checked"}`}>
                    <section className='registry_row__item item extra_small'>
                        <input checked={selectSubrow.companyName} type='checkbox' onChange={() => setSelectSubrow({...selectSubrow, companyName:!selectSubrow.companyName})}/>
                    </section>
                    <section className='registry_row__item item medium'>
                        <span className="item-text">{invoice.importer}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{invoice.invoice_number}/DD</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{invoice.payment_type}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{invoice.amount.toFixed(1)}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{invoice.tax_amount.toFixed(1)}</span>              
                    </section>
                    <section className='registry_row__item item large'>
                        <span className="item-text">{invoice.comment}</span>             
                    </section>
                    <section className='registry_row__item item small'>
                        <input checked={invoice.is_confirmed} type='checkbox'/>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <button onClick={() => handleShowPopUp("edit", invoice)} className='download_button'><CreateTwoToneIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default RegistrySubRow
