import React from 'react'

function ImporterModalHeader({ modalMethod, handleDeleteImporter, importer }) {
    return (
        <section className='Importer_modal_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавление поставщика": `${importer.company_name}`}</span>
                    {modalMethod === 'edit' && <button onClick={() => handleDeleteImporter(importer)} className='delete'>Удалить</button>}
                </div>
                <hr />
        </section>
    )
}

export default ImporterModalHeader
