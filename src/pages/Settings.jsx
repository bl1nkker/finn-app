import React, { useEffect, useState } from 'react'
import AddBudgetModal from '../components/budget/addBudget/AddBudgetModal'
import Backdrop from '../components/confirmationWindow/Backdrop'
import './pagesStyles/settings.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import SettingsHeader from '../components/settings/SettingsHeader'
import SettingsTableHeader from '../components/settings/SettingsTableHeader'
import SettingsContent from '../components/settings/SettingsContent'
import { fetchAccounts, fetchFacilities } from '../redux/actions/settingsActions'
import AccountModal from '../components/settings/settingsModals/AccountModal'
import CompanyModal from '../components/settings/settingsModals/CompanyModal'

function Settings() {
    const dispatch = useDispatch()
    // Change this to ID
    // When API will be ready, connect this to all components
    const accounts = useSelector(state => state.settings.accounts)
    const companies = useSelector(state => state.settings.companies)
    const [showAddAccountModal, setShowAddAccountModal] = useState(false)
    const [showAddCompanyModal, setShowAddCompanyModal] = useState(false)

    // create/edit/idle
    const [modalMethod, setModalMethod] = useState('idle')
    const [selectedAccount, setSelectedAccount] = useState(null)
    const [selectedCompany, setSelectedCompany] = useState(null)

    useEffect(() => {
      dispatch(fetchAccounts())
      dispatch(fetchFacilities())
    }, [dispatch])
    
    
    const handleOpenAccountModal = ( method, company) =>{
        setSelectedAccount(company)
        setModalMethod(method)
        setShowAddAccountModal(true);
    }
    const handleCloseAccountModal = () =>{
        setSelectedAccount(null)
        setModalMethod("idle")
        setShowAddAccountModal(false);
    }

    const handleOpenCompanyModal = ( method, account) =>{
        setSelectedCompany(account)
        setModalMethod(method)
        setShowAddCompanyModal(true);
    }
    const handleCloseCompanyModal = () =>{
        setSelectedCompany(null)
        setModalMethod("idle")
        setShowAddCompanyModal(false);
    }

    const handleAddAccount = (formData) =>{
        if (modalMethod === "edit") {
            // dispatch(updateBudget(budgetType, formData, formData.id))
            console.log(`Editing account`, formData);
        }
        else if (modalMethod === "create") {
            // dispatch(createBudget(budgetType, formData))
            console.log(`Adding account`, formData);
        }
        setSelectedAccount(null)
        setModalMethod("idle")
        setShowAddAccountModal(false);
    }

    const handleAddCompany = (formData) =>{
        if (modalMethod === "edit") {
            // dispatch(updateBudget(budgetType, formData, formData.id))
            console.log(`Editing company`, formData);
        }
        else if (modalMethod === "company") {
            // dispatch(createBudget(budgetType, formData))
            console.log(`Adding account`, formData);
        }
        setSelectedCompany(null)
        setModalMethod("idle")
        setShowAddCompanyModal(false);
    }

    

    return (
        <div className='table_container'>
            
            {showAddAccountModal && <>
                <Backdrop />
                <AccountModal selectedAccount={selectedAccount} modalMethod={modalMethod} handleAddAccount={handleAddAccount} handleCloseAccountModal={handleCloseAccountModal}/>
            </>}
            {showAddCompanyModal && <>
                <Backdrop />
                <CompanyModal selectedCompany={selectedCompany} modalMethod={modalMethod} handleAddCompany={handleAddCompany} handleCloseCompanyModal={handleCloseCompanyModal}/>
            </>}
            <SettingsHeader />
            <SettingsTableHeader accounts={accounts} companies={companies} handleOpenCompanyModal={handleOpenCompanyModal} handleOpenAccountModal={handleOpenAccountModal}/>
            <SettingsContent handleOpenCompanyModal={handleOpenCompanyModal} handleOpenAccountModal={handleOpenAccountModal} accounts={accounts} companies={companies}/>
        </div>
    )
}

export default Settings
