import React, { useState } from 'react'
import DoubleField from './../../popUp/DoubleField'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import Button from '../../popUp/Button'
import TextAreaField from '../../popUp/TextAreaField'
import CompanyModalHeader from './CompanyModalHeader'

function CompanyModal({selectedCompany, modalMethod, handleAddCompany, handleCloseCompanyModal}) {
    const [formData, setFormData] = useState(selectedCompany ? selectedCompany : 
        {id: undefined,amount: 0, description: "", is_verified: false, contragent: "", added_at: "", added_by: "",category: "",facility: 0})
    return (
        <div className='modal_container'>
            <CompanyModalHeader modalMethod={modalMethod} selectedCompany={selectedCompany} />
        </div>
    )
}

export default CompanyModal
