import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function CompanyModalHeader({ modalMethod, selectedCompany, handleChangeActivity }) {
    const [company, setCompany] = useState(selectedCompany ? selectedCompany: undefined)
    useEffect(() =>{setCompany(selectedCompany)}, [selectedCompany])
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Создание нового предприятия" : company.name}</span>
                    {modalMethod === 'edit' && <button onClick={handleChangeActivity} className={company.is_active ? "delete" : "add"}>{company.is_active ? "Заблокировать": "Активировать"}</button>}
                </div>
                <hr />
        </section>
    )
}

export default CompanyModalHeader
