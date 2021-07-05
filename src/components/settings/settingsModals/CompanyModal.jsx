import React, { useState } from 'react'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import Button from '../../popUp/Button'
import CompanyModalHeader from './CompanyModalHeader'
import DoubleField from '../../popUp/DoubleField'
import TextAreaField from '../../popUp/TextAreaField'

function CompanyModal({selectedCompany, modalMethod, handleAddCompany, handleCloseCompanyModal }) {
    const subdOpt = ['','', '']
    const [formData, setFormData] = useState(selectedCompany ? {...selectedCompany, listOfOrgs:[{id:1}, {id:2}, {id:3}]} : 
        {name: '', bank_name: '', inn: "", bik:'', 
        correspondent_account:"", expense_account:"", comment:"", is_active:true,
        listOfOrgs:[{id:1}, {id:2}, {id:3}] })
    const handleDeleteRow = (data) =>{
        const updatedLst = formData.listOfOrgs.filter(d => data.id !== d.id)
        setFormData({...formData, listOfOrgs:updatedLst})
    }
    console.log(formData);
    return (
        <div className='settings_modal_container'>
            <CompanyModalHeader handleChangeActivity={() => setFormData({...formData, is_active:!formData.is_active})} modalMethod={modalMethod} selectedCompany={formData}/>

            <section className='settings_modal_content'>
                <div className='companies_left'>
                    <DoubleField 
                        fieldLabel_1='Наименование компании' 
                        fieldLabel_2='ИИН' 
                        value_1={formData.name} 
                        value_2={formData.inn}
                        setValue_1={(value) => setFormData({...formData, name: value})}
                        setValue_2={(value) => setFormData({...formData, inn: value})}
                         />
                    <DoubleField 
                        fieldLabel_1='Наименование банка' 
                        fieldLabel_2='БИК' 
                        value_1={formData.bank_name} 
                        value_2={formData.bik}
                        setValue_1={(value) => setFormData({...formData, bank_name: value})}
                        setValue_2={(value) => setFormData({...formData, bik: value})}
                         />
                    <DoubleField 
                        fieldLabel_1='Корреспондентский счет' 
                        fieldLabel_2='Расчетный счет' 
                        value_1={formData.correspondent_account} 
                        value_2={formData.expense_account}
                        setValue_1={(value) => setFormData({...formData, correspondent_account: value})}
                        setValue_2={(value) => setFormData({...formData, expense_account: value})}
                         />
                    <TextAreaField fieldLabel='Комментарий' value={formData.comment} setValue={(value) => setFormData({...formData, comment:value})}/>
                    <section className='modal_actions'>
                        <Button onClickFunc={() => handleCloseCompanyModal()}  buttonName="Закрыть" isBlue={false}/>
                        <Button onClickFunc={() => handleAddCompany(formData)} buttonName="Сохранить" isBlue={true}/>
                    </section>
                </div>

                <div className='companies_right'>
                    <section className='list_rows'>
                        {formData.listOfOrgs.map((data, key) => (
                        <div key={key}>
                            <div className='right_row' >
                                <div className='row_column_left'><LargeField fieldLabel='ФИО'/></div>
                                <div className='row_column_right'><DropDownList options={subdOpt} fieldLabel='Должность'/></div>
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

export default CompanyModal
