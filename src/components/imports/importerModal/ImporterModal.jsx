import React, { useState } from 'react'
import DoubleField from './../../popUp/DoubleField'
import Button from '../../popUp/Button'
import ImporterModalHeader from './ImporterModalHeader'
import DropDownList from '../../popUp/DropDownList'
import TextAreaField from '../../popUp/TextAreaField'
import LargeField from '../../popUp/LargeField'

function ImporterModal({ selectedImporter, handleCloseImporterModal, handleSendImporter, handleDeleteImporter, modalMethod }) {
    const productTypes = ['Овощи', 'Машины', 'Другое']
    const [formData, setFormData] = useState(selectedImporter ? selectedImporter : 
        { company_name: "", bank_name: "", correspondent_account: "", 
        inn: "", bik: "", expense_account: "", production_type: "", 
        custom_production_type: "", comment: "", is_deleted: true, 
        facility: 1})
    return (
        <div className='importer_modal_container'>
            <ImporterModalHeader handleDeleteImporter={handleDeleteImporter} modalMethod={modalMethod} importer={formData}/>
            <div className='importer_modal_form'>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.company_name} 
                        value_2={formData.inn} 
                        fieldLabel_1="Наименование компании" 
                        fieldLabel_2="ИИН" 
                        inputType_1="text" 
                        inputType_2="text"
                        setValue_1={(value) => setFormData({...formData, company_name: value})}
                        setValue_2={(value) => setFormData({...formData, inn: parseInt(value)})}
                        />
                </section>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.bank_name} 
                        value_2={formData.bik} 
                        fieldLabel_1="Наименование Банка" 
                        fieldLabel_2="БИК" 
                        inputType_1="text" 
                        inputType_2="text"
                        setValue_1={(value) => setFormData({...formData, bank_name: value})}
                        setValue_2={(value) => setFormData({...formData, bik: value})}
                        />
                </section>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.correspondent_account} 
                        value_2={formData.expense_account} 
                        fieldLabel_1="Корреспондентский счет" 
                        fieldLabel_2="Расчетный счет" 
                        inputType_1="text" 
                        inputType_2="text"
                        setValue_1={(value) => setFormData({...formData, correspondent_account: value})}
                        setValue_2={(value) => setFormData({...formData, expense_account: value})}
                        />
                </section>

                <section className='modal_field'>
                    <DropDownList 
                        fieldLabel="Категория" 
                        value={formData.production_type}
                        options={productTypes}
                        setValue={(value) => setFormData({...formData, production_type:value})}  />
                    {formData.production_type === 'Другое' && <LargeField 
                                                                value={formData.custom_production_type} 
                                                                fieldLabel="Введите свою продукцию"
                                                                setValue={(value) => setFormData({...formData, custom_production_type: value})}/>}
                    
                </section>
                <section className='modal_field'>
                <TextAreaField 
                    value={formData.comment}
                    fieldLabel="Комментарий"
                    setValue={(value) => setFormData({...formData, comment:value})}/>
                </section>
                <section className='modal_actions'>
                    <Button 
                    onClickFunc={handleCloseImporterModal} 
                    buttonName="Закрыть" isBlue={false}/>
                    <Button 
                    onClickFunc={() => handleSendImporter(formData)} 
                    buttonName={modalMethod === 'create' ? "Добавить": "Сохранить"} isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default ImporterModal
