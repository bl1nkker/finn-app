import React, { useState } from 'react'
import DoubleField from './../../popUp/DoubleField'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import Button from '../../popUp/Button'
import TextAreaField from '../../popUp/TextAreaField'
import AccountModalHeader from './AccountModalHeader'

function AccountModal({selectedAccount, modalMethod, handleAddAccount, handleCloseAccountModal, }) {
    const [formData, setFormData] = useState(selectedAccount ? selectedAccount : 
        {id: undefined,amount: 0, description: "", is_verified: false, contragent: "", added_at: "", added_by: "",category: "",facility: 0})
    return (
        <div className='modal_container'>
            <AccountModalHeader modalMethod={modalMethod} selectedAccount={selectedAccount}/>
        </div>
    )
}

export default AccountModal
