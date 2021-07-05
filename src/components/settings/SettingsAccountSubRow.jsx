import React, { useState, useEffect } from 'react'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function SettingsAccountsSubRow({account, handleOpenAccountModal}) {
    const [showCreator, setShowCreator] = useState(false)
    return (
        <>
        <div
        onClick={() => handleOpenAccountModal('edit', account)} 
        onMouseOver={() => setShowCreator(true)} 
        onMouseOut={() => setShowCreator(false)} 
        className={`registry_subrow subrow ${showCreator && 'subrow_checked'}`}>
                    <section className='subrow_item item oversmall'>
                        <span className="item-text">{account.full_name}</span>
                    </section>
                    <hr />
                    <section className='subrow_item item medium'>
                        <span className="item-text">{account.phone_number}</span>
                    </section>
                    <hr />
                    <section className='subrow_item item oversmall'>
                        <span className="item-text">{account.email}</span>
                    </section>
                    <hr />
                    <section className='subrow_item item oversmall'>
                        <span className={`item-text ${account.is_active ? "add" : "delete"}`}>{account.is_active ? "Активен": "Не активен"}</span>
                    </section>
                </div>
        </>
    )
}

export default SettingsAccountsSubRow
