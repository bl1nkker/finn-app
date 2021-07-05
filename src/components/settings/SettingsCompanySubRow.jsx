import React, { useState } from 'react'

function SettingsCompanySubRow({company, handleOpenCompanyModal}) {
    const [showCreator, setShowCreator] = useState(false)
    return (
        <>
        <div 
        onClick={() => handleOpenCompanyModal('edit', company)}
        onMouseOver={() => setShowCreator(true)} 
        onMouseOut={() => setShowCreator(false)} 
        className={`registry_subrow subrow ${showCreator && 'subrow_checked'}`}>
                    <section className='registry_row__item item large'>
                        <span className="item-text">{company.name}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item oversmall'>
                        <span className={`item-text ${company.is_active ? "add" : "delete"}`}>{company.is_active ? "Активен" : "Не активен"}</span>
                    </section>
                    <hr />
        </div>
        </>
    )
}

export default SettingsCompanySubRow
