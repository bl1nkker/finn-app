import React from 'react'
import SettingsAccountsSubRow from './SettingsAccountSubRow'
import SettingsCompanySubRow from './SettingsCompanySubRow'

function SettingsContent({ accounts, companies, handleOpenCompanyModal, handleOpenAccountModal }) {
    return (
        <div className='content_container'>
            <div className='content_left_column'>
                {accounts.map( (account, key) => <SettingsAccountsSubRow handleOpenAccountModal={handleOpenAccountModal} key={key} account={account}/>)}
            </div>

            <div className='content_right_column'>
                {companies.map( (company, key) => <SettingsCompanySubRow handleOpenCompanyModal={handleOpenCompanyModal} key={key} company={company}/> )}
            </div>
        </div>
    )
}

export default SettingsContent
