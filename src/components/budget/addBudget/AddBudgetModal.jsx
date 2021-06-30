import React, { useState } from 'react'
import AddBudgetHeader from './AddBudgetHeader'
import DoubleField from './../../popUp/DoubleField'
import LargeField from './../../popUp/LargeField'
import DropDownList from '../../popUp/DropDownList'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import Button from '../../popUp/Button'
import TextAreaField from '../../popUp/TextAreaField'

function AddBudgetModal({handleAddBudget, handleCloseBudgetModal, budgetType}) {
    const [formData, setFormData] = useState(
        { date:0, amount:0, category:'', description:'', is_confirmed:false })
    const categories = ['Хозтовары', "Машины", "Овощи"]
    return (
        <div className='modal_container'>
            <AddBudgetHeader budgetType={budgetType} handleCloseBudgetModal={handleCloseBudgetModal} />
            <div className='add_budget_form'>
                <section className='modal_field'>
                    <DoubleField 
                        value_1={formData.date} 
                        value_2={formData.amount} 
                        fieldLabel_1="Дата" 
                        fieldLabel_2="Сумма" 
                        inputType_1="date" 
                        inputType_2="number"
                        setValue_1={(value) => setFormData({...formData, date: value})}
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
                <section className='modal_field switch_field'>
                    {/* Send request to update is_confirmed prop of the invoice */}
                    <ToggleSwitch 
                        value={formData.is_confirmed} 
                        setValue={() => setFormData({...formData, is_confirmed:!formData.is_confirmed})} />
                    <p className='switch_title'>Сразу подтвердить</p>
                </section>
                <section className='modal_actions'>
                    <Button onClickFunc={handleCloseBudgetModal} buttonName="Закрыть" isBlue={false}/>
                    <Button onClickFunc={() => handleAddBudget(formData)} buttonName="Добавить" isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default AddBudgetModal
