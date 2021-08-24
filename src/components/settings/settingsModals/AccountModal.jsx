import React, { useState } from 'react'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import Button from '../../popUp/Button'
import AccountModalHeader from './AccountModalHeader'

function AccountModal({ formError, selectedAccount, modalMethod, handleAddAccount, handleCloseAccountModal, }) {
    const orsOpt = ['', '', '']
    const subdivisionOpt = ["Администрация", "Кухня", "Бармены", "Официанты", "Охрана", "Уборка", "Тех. персонал"]
    const [formData, setFormData] = useState(selectedAccount ? {...selectedAccount, listOfOrgs:[{id:1}, {id:2}, {id:3}]} : 
        {full_name: '', phone_number: '', email: "", listOfOrgs:[{id:1}, {id:2}, {id:3}], is_active:true })
    const handleDeleteRow = (data) =>{
        const updatedLst = formData.listOfOrgs.filter(d => data.id !== d.id)
        setFormData({...formData, listOfOrgs:updatedLst})
    }
    return (
        <div className='settings_modal_container'>
            <AccountModalHeader handleChangeActivity={() => setFormData({...formData, is_active:!formData.is_active})} modalMethod={modalMethod} selectedAccount={formData}/>

            <section className='settings_modal_content'>
                <div className='accounts_left'>
                    <LargeField value={formData.full_name} setValue={(value) => setFormData({...formData, full_name:value})} fieldLabel="ФИО"/>
                    <LargeField value={formData.phone_number} setValue={(value) => setFormData({...formData, phone_number:value})} fieldLabel='Номер телефона'/>
                    <LargeField value={formData.email} setValue={(value) => setFormData({...formData, email:value})} fieldLabel='Почта/логин'/>
                    <section className='modal_actions'>
                    {formError && <div className="error_message">Fill in all the fields on this side</div>}
                        <Button onClickFunc={() => handleCloseAccountModal()}  buttonName="Закрыть" isBlue={false}/>
                        <Button onClickFunc={() => handleAddAccount(formData)} buttonName="Сохранить" isBlue={true}/>
                    </section>
                </div>

                <div className='accounts_right'>
                    <section className='list_rows'>
                        {formData.listOfOrgs.map((data, key) => (
                        <div key={key}>
                            <div className='right_row' >
                                <div className='row_column_left'><DropDownList options={orsOpt} fieldLabel='Организация'/></div>
                                <div className='row_column_right'><DropDownList options={subdivisionOpt} fieldLabel='Должность'/></div>
                            </div>
                            <div className='row_actions'>
                                <button onClick={() => handleDeleteRow(data)} className='delete_row'>Удалить</button>
                            </div>
                            
                        </div>))}
                    </section>
                    <hr />
                    <button onClick={() => setFormData({...formData, listOfOrgs:[...formData.listOfOrgs, {id:123}]})} className='add_row'>Добавить организацию</button>
                </div>
            </section>

            
        </div>
    )
}

export default AccountModal
