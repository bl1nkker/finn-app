import React, { useState, useEffect } from 'react'

function ScansSubRow({ setScansToDownload, scansToDownload, scan, handleOpenRevenueModal }) {
    const [isHover, setIsHover] = useState(false)
    const addScanToList = () =>{
        console.log();
        if (scansToDownload.indexOf(scan) === -1) {
            scansToDownload.push(scan)
        }else{
            // setScansToDownload(scansToDownload.push(scan))
            setScansToDownload(scansToDownload.filter(scn => scn.id !== scan.id))
        }
    }
    return (
        <div onClick={() => handleOpenRevenueModal('edit', scan)} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className={`registry_subrow budget_subrow ${isHover && 'subrow_checked'}`}>
            <section className='registry_row__item item semilarge'>
                <span className="item-text">{scan.type_scan}</span>
            </section>
            <hr />
            <section className='registry_row__item item large'>
                <span className="item-text">{scan.file}</span>
            </section>
            <hr />
            <section className='registry_row__item item semilarge'>
            <input value={scan.checked} type='checkbox' 
                onChange={addScanToList}/>
            </section>
        </div>
    )
}

export default ScansSubRow
