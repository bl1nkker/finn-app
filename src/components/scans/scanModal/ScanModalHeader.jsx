import React from 'react'

function ScanModalHeader({ modalMethod, handleDeleteScan, scan }) {
    return (
        <section className='revenue_modal_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавить устав. документ": scan.file}</span>
                    {modalMethod === 'edit' && <button onClick={() => handleDeleteScan(scan)} className='delete'>Удалить</button>}
                </div>
                <hr />
        </section>
    )
}

export default ScanModalHeader
