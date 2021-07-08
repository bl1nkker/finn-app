import React, { useEffect, useState } from 'react'

function CompanyModalHeader({ modalMethod, selectedCompany, handleChangeActivity, staticCompany }) {
    const [company, setCompany] = useState(selectedCompany ? selectedCompany: undefined)
    useEffect(() =>{setCompany(selectedCompany)}, [selectedCompany])
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Создание нового предприятия" : staticCompany.name}</span>
                    {modalMethod === 'edit' && <button onClick={handleChangeActivity} className={company.is_active ? "delete" : "add"}>{company.is_active ? "Заблокировать": "Активировать"}</button>}
                </div>
                <hr />
        </section>
    )
}

export default CompanyModalHeader
