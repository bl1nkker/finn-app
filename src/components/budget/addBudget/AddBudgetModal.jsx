import React, { useState } from 'react'
import AddBudgetHeader from './AddBudgetHeader'
import DoubleField from './../../popUp/DoubleField'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import Button from '../../popUp/Button'
import TextAreaField from '../../popUp/TextAreaField'

function AddBudgetModal({handleDeleteBudget, selectedBudget, modalMethod, handleAddBudget, handleCloseBudgetModal, budgetType}) {
    const [formData, setFormData] = useState(selectedBudget ? selectedBudget : 
        {id: undefined,amount: 0, description: "", is_verified: false, contragent: "", added_at: "", added_by: "",category: "",facility: 0})
    const categories = ["Машины", "Овощи",'Хозтовары']
    const userIsStaff = JSON.parse(localStorage.getItem("isStaff"))
    return (
        <div className='modal_container'>
            <AddBudgetHeader handleDeleteBudget={() => handleDeleteBudget(formData)} modalMethod={modalMethod} budgetType={budgetType} handleCloseBudgetModal={handleCloseBudgetModal} />
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
                    {/* <LargeField fieldLabel="Поставщик"/> */}
                    <DropDownList 
                        fieldLabel="Категория" 
                        value={formData.category}
                        options={categories}
                        setValue={(value) => setFormData({...formData, category:value})}  />
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
                    <Button onClickFunc={handleCloseBudgetModal} buttonName="Закрыть" isBlue={false}/>
                    <Button onClickFunc={() => handleAddBudget(formData)} buttonName="Добавить" isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default AddBudgetModal
