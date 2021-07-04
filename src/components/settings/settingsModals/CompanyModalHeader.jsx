import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function CompanyModalHeader({ modalMethod, selectedCompany }) {
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Создание нового предприятия" : selectedCompany.name}</span>
                </div>
                <hr />
        </section>
    )
}

export default CompanyModalHeader
