import React from 'react'

function CoworkersModalHeader({ modalMethod, handleDeleteCoworker, coworker }) {
    return (
        <section className='Importer_modal_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавление сотрудника": `${coworker.full_name}`}</span>
                    {modalMethod === 'edit' && <button onClick={() => handleDeleteCoworker(coworker)} className='delete'>Удалить</button>}
                </div>
                <hr />
        </section>
    )
}

export default CoworkersModalHeader
