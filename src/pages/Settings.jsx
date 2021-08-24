import React, { useEffect, useState } from 'react'
import Backdrop from '../components/confirmationWindow/Backdrop'
import './pagesStyles/settings.css'
import './pagesStyles/settingsModal.css'

import SettingsHeader from '../components/settings/SettingsHeader'
import SettingsTableHeader from '../components/settings/SettingsTableHeader'
import SettingsContent from '../components/settings/SettingsContent'
import AccountModal from '../components/settings/settingsModals/AccountModal'
import CompanyModal from '../components/settings/settingsModals/CompanyModal'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createAccount, createFacility, fetchAccounts, fetchFacilities, updateAccount, updateFacility } from '../redux/actions/settingsActions'


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
    const [formError, setFormError] = useState(false)

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
        setFormError(false)
    }

    const handleOpenCompanyModal = ( method, company) =>{
        setSelectedCompany(company)
        setModalMethod(method)
        setShowAddCompanyModal(true);
    }
    const handleCloseCompanyModal = () =>{
        setSelectedCompany(null)
        setModalMethod("idle")
        setShowAddCompanyModal(false);
        setFormError(false)
    }

    const handleAddAccount = (formData) =>{
        // {full_name: '', phone_number: '', email: "",}
        if (!formData.full_name || !formData.phone_number || !formData.email)
            setFormError(true)
        else{
            if (modalMethod === "edit") {
                console.log(`Editing account`, formData);
                dispatch(updateAccount(formData, formData.id))
            }
            else if (modalMethod === "create") {
                console.log(`Adding account`, formData);
                // default password
                const defaultPassword = 'qwer1234'
                formData = {...formData, password: defaultPassword}
                dispatch(createAccount(formData))
            }
            setSelectedAccount(null)
            setModalMethod("idle")
            setShowAddAccountModal(false);
            window.location.reload()
        }
    }

    const handleAddCompany = (formData) =>{
        // {name: '', bank_name: '', inn: "", bik:'', correspondent_account:"", expense_account:"", 
        // comment:"", is_active:true, listOfOrgs:[{id:1}, {id:2}, {id:3}] }
        if (!formData.name || !formData.bank_name || !formData.inn ||
            !formData.bik ||!formData.correspondent_account ||!formData.expense_account ||!formData.comment)
            setFormError(true)
        else{
            if (modalMethod === "edit") {
                dispatch(updateFacility(formData, formData.id))
                console.log(`Editing company`, formData);
            }
            else if (modalMethod === "create") {
                dispatch(createFacility(formData))
                console.log(`Adding account`, formData);
            }
            setSelectedCompany(null)
            setModalMethod("idle")
            setShowAddCompanyModal(false);
            window.location.reload()
            }
    }

    

    return (
        <div className='table_container'>
            
            {showAddAccountModal && <>
                <Backdrop />
                <AccountModal formError={formError}  selectedAccount={selectedAccount} modalMethod={modalMethod} handleAddAccount={handleAddAccount} handleCloseAccountModal={handleCloseAccountModal}/>
            </>}
            {showAddCompanyModal && <>
                <Backdrop />
                <CompanyModal formError={formError} selectedCompany={selectedCompany} modalMethod={modalMethod} handleAddCompany={handleAddCompany} handleCloseCompanyModal={handleCloseCompanyModal}/>
            </>}
            <SettingsHeader />
            <SettingsTableHeader accounts={accounts} companies={companies} handleOpenCompanyModal={handleOpenCompanyModal} handleOpenAccountModal={handleOpenAccountModal}/>
            <SettingsContent handleOpenCompanyModal={handleOpenCompanyModal} handleOpenAccountModal={handleOpenAccountModal} accounts={accounts} companies={companies}/>
        </div>
    )
}

export default Settings
