import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function AccountModalHeader({ modalMethod, selectedAccount }) {
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавление нового аккаунта" : selectedAccount.full_name}</span>
                </div>
                <hr />
        </section>
    )
}

export default AccountModalHeader
