import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function RegistrySubRow({subrow, rowDate, handleShowPopUp, selectRow, setSelectRow, childSelected, setChildSelected}) {
    const [selectSubrow, setSelectSubrow] = useState({date:false, companyName:false, status:false})
    useEffect(() =>{
        if (selectRow.date) setSelectSubrow({...selectSubrow, companyName:true})
    },[selectRow])

    const checkboxHandler = () =>{
        
    }

    return (
        <div className={`registry_subrow ${selectSubrow.companyName && "subrow_checked"}`}>
                    <section className='registry_row__item item extra_small'>
                        <input checked={selectSubrow.companyName} type='checkbox' onChange={() => setSelectSubrow({...selectSubrow, companyName:!selectSubrow.companyName})}/>
                    </section>
                    <section className='registry_row__item item medium'>
                        <span className="item-text">{subrow.companyName}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{subrow.number}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{subrow.type}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{subrow.sum}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{subrow.nds}</span>              
                    </section>
                    <section className='registry_row__item item large'>
                        <span className="item-text">{subrow.comment}</span>             
                    </section>
                    <section className='registry_row__item item small'>
                        <input checked={selectSubrow.status} type='checkbox' onChange={() => setSelectSubrow({...selectSubrow, status:!selectSubrow.status})}/>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <button onClick={() => handleShowPopUp(subrow, rowDate)} className='download_button'><CreateTwoToneIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default RegistrySubRow
