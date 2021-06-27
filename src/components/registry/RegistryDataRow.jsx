import React, { useState, useEffect } from 'react';
import RegistrySubRow from './RegistrySubRow';

function RegistryDataRow({invoicesByDate, selectAll, setSelectAll, handleShowPopUp}) {
    const [selectRow, setSelectRow] = useState({date:false, companyName:false, status:false})
    const [childSelected, setChildSelected] = useState(0)

    useEffect(() =>{
        if (selectAll.date) setSelectRow({...selectRow, date:true})
    },[selectAll])

    const handleChangeCheckbox = () =>{
        setSelectRow({...selectRow, date:!selectRow.date})
        setSelectAll({...selectAll, date:false})
    }



    return (
            <div className={`registry_row ${selectRow.date && "row_checked"}`}>
            <div className="registry_row__left">
                <section className='registry_row__item item extra_small'>
                    <input checked={selectAll.date ? selectAll.date : selectRow.date} type='checkbox' onChange={handleChangeCheckbox}/>
                </section>
                <section className='registry_row__item item small'>
                    <span className="item-text">{invoicesByDate.date}</span>     
                </section>
            </div>
            <div className="registry_row__right">

            {/* Subrows */}
            {invoicesByDate.invoices.map((invoice, key) => (
            <RegistrySubRow 
                key={key}
                rowDate={invoicesByDate.date} 
                handleShowPopUp={handleShowPopUp} 
                invoice={invoice}
                selectRow={selectRow}
                setSelectRow={setSelectRow}
                childSelected={childSelected}
                setChildSelected={setChildSelected}/>
                ))}
            </div>
        </div>
    )
}

export default RegistryDataRow
