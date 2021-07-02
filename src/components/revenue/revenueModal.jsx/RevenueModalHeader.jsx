import React from 'react'

function RevenueModalHeader({ modalMethod, handleDeleteRevenue, revenue }) {
    return (
        <section className='revenue_modal_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавить выручку": `Выручка за ${revenue.added_at}`}</span>
                    {modalMethod === 'edit' && <button onClick={() => handleDeleteRevenue(revenue)} className='delete'>Удалить</button>}
                </div>
                <hr />
        </section>
    )
}

export default RevenueModalHeader
