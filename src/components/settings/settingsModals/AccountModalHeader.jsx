import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function AccountModalHeader({ modalMethod, selectedAccount, handleChangeActivity }) {
    const [account, setAccount] = useState(selectedAccount ? selectedAccount: undefined)
    useEffect(() =>{setAccount(selectedAccount)}, [selectedAccount])
    return (
        <section className='add_budget_header'>
                <div className='header_top'>
                    <span className='header_text'>{modalMethod === 'create' ? "Добавление нового аккаунта" : selectedAccount.full_name}</span>
                    {modalMethod === 'edit' && <button onClick={handleChangeActivity} className={account.is_active ? "delete" : "add"}>{account.is_active ? "Заблокировать": "Активировать"}</button>}
                </div>
                <hr />
        </section>
    )
}

export default AccountModalHeader
