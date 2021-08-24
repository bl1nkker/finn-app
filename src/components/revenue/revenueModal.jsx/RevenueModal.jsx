import React, { useState } from 'react'
import DoubleField from './../../popUp/DoubleField'
import Button from '../../popUp/Button'
import RevenueModalHeader from './RevenueModalHeader'

function RevenueModal({ formError, selectedRevenue, handleCloseRevenueModal, handleSendRevenue, handleDeleteRevenue, modalMethod }) {

    const [formData, setFormData] = useState(selectedRevenue ? selectedRevenue : 
        {id: undefined, np: 0, cash_income: 0, cash_free_income: 0, contragent: "", added_at: "", added_by: "",category: "",facility: 1})

    return (
        <div className='revenue_modal_container'>
            <RevenueModalHeader handleDeleteRevenue={handleDeleteRevenue} modalMethod={modalMethod} revenue={formData}/>
            <div className='revenue_modal_form'>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.added_at} 
                        value_2={formData.np} 
                        fieldLabel_1="Дата" 
                        fieldLabel_2="НП" 
                        inputType_1="date" 
                        inputType_2="number"
                        setValue_1={(value) => setFormData({...formData, added_at: value})}
                        setValue_2={(value) => setFormData({...formData, np: parseInt(value)})}
                        />
                </section>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.cash_income} 
                        value_2={formData.tables} 
                        fieldLabel_1="Безнал" 
                        fieldLabel_2="Столы" 
                        inputType_1="number" 
                        inputType_2="number"
                        setValue_1={(value) => setFormData({...formData, cash_income: parseInt(value)})}
                        setValue_2={(value) => setFormData({...formData, tables: parseInt(value)})}
                        />
                </section>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.cash_free_income} 
                        value_2={formData.guests} 
                        fieldLabel_1="Наличный" 
                        fieldLabel_2="Гости" 
                        inputType_1="number" 
                        inputType_2="number"
                        setValue_1={(value) => setFormData({...formData, cash_free_income: parseInt(value)})}
                        setValue_2={(value) => setFormData({...formData, guests: parseInt(value)})}
                        />
                </section>
                <section className='modal_actions'>
                {formError && <div style={{ top:0 }} className="error_message">Fill in all the fields on this side</div>}
                    <Button 
                    onClickFunc={handleCloseRevenueModal} 
                    buttonName="Закрыть" isBlue={false}/>
                    <Button 
                    onClickFunc={() => handleSendRevenue(formData)} 
                    buttonName={modalMethod === 'create' ? "Добавить": "Сохранить"} isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default RevenueModal
