import React, { useState } from 'react'
import AddBudgetHeader from './AddBudgetHeader'
import DoubleField from './../../popUp/DoubleField'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import Button from '../../popUp/Button'
import TextAreaField from '../../popUp/TextAreaField'

function AddBudgetModal({ formError, handleDeleteBudget, selectedBudget, modalMethod, handleAddBudget, handleCloseBudgetModal, budgetType}) {
    const [formData, setFormData] = useState(selectedBudget ? selectedBudget : 
        {id: undefined,amount: 0, description: "", is_verified: false, contragent: "", added_at: "", added_by: "",category: "",facility: 0})
    const categories = [
        {
            "value": "1",
            "display_name": "Аванс"
        },
        {
            "value": "2",
            "display_name": "Продукты"
        },
        {
            "value": "3",
            "display_name": "Хозтовары"
        },
        {
            "value": "4",
            "display_name": "Посуда"
        },
        {
            "value": "5",
            "display_name": "Инкассация"
        },
        {
            "value": "6",
            "display_name": "Под отчёт"
        },
        {
            "value": "7",
            "display_name": "Реклама"
        },
        {
            "value": "8",
            "display_name": "Ремонтные работы"
        },
        {
            "value": "9",
            "display_name": "Другое"
        }
    ]
    const userIsStaff = JSON.parse(localStorage.getItem("isStaff"))
    return (
        <div className='modal_container'>
            <AddBudgetHeader handleDeleteBudget={() => handleDeleteBudget(formData, budgetType)} modalMethod={modalMethod} budgetType={budgetType} handleCloseBudgetModal={handleCloseBudgetModal} />
            <div className='add_budget_form'>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.added_at} 
                        value_2={formData.amount} 
                        fieldLabel_1="Дата" 
                        fieldLabel_2="Сумма" 
                        inputType_1="date" 
                        inputType_2="number"
                        setValue_1={(value) => setFormData({...formData, added_at: value})}
                        setValue_2={(value) => setFormData({...formData, amount: value})}/>
                </section>
                <section className='modal_field'>
                        <div className='modal_largefield'>
                            <label className="label">Категория</label>
                            <select className="input select"
                            onChange={(event) => setFormData({...formData, category:event.target.value})}
                            placeholder='Введите значение...'>
                                {categories.map( (opt, key) => (
                                    <option key={key} value={opt.value} className='option' >{opt.display_name}</option>
                                ))}
                        </select>
                    </div>
                </section>
                <section className='modal_field'>
                <TextAreaField 
                    value={formData.description}
                    fieldLabel="Описание"
                    setValue={(value) => setFormData({...formData, description:value})}/>
                </section>
                {userIsStaff && 
                <section className='modal_field switch_field'>
                    {/* Send request to update is_verified prop of the invoice */}
                    <ToggleSwitch 
                        value={formData.is_verified} 
                        setValue={() => setFormData({...formData, is_verified:!formData.is_verified})} />
                    <p className='switch_title'>Сразу подтвердить</p>
                </section>}
                
                <section className='modal_actions'>
                {formError && <div className="error_message">Fill in all the fields on this side</div>}
                    <Button onClickFunc={handleCloseBudgetModal} buttonName="Закрыть" isBlue={false}/>
                    <Button onClickFunc={() => handleAddBudget(formData)} buttonName="Добавить" isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default AddBudgetModal
