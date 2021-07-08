import React, { useState } from 'react'
import Button from '../../popUp/Button'
import LargeField from '../../popUp/LargeField'
import TextAreaField from '../../popUp/TextAreaField'
import ToggleSwitch from '../../popUp/ToggleSwitch'
import DropDownList from '../../popUp/DropDownList'
import CoworkersModalHeader from './CoworkersModalHeader'
import DocsField from '../../popUp/DocsField'

function CoworkersModal({ selectedCoworker, handleCloseCoworkerModal, handleSendCoworker, handleDeleteCoworker, modalMethod }) {
    const postOpt = []
    const subdivisionOpt = ["Администрация", "Кухня", "Бармены", "Официанты", "Охрана", "Уборка", "Тех. персонал"]
    const ptOpt = ["Оклад", "Почасовая ставка", "Посуточная ставка"]
    const fileTypes = ["Паспорт", "СНИЛС","ИИН", "Военный билет", "Трудовой договор", "Миграц. карта", "Патент", "Регистрация по месту прибывания"]
    const [formData, setFormData] = useState(selectedCoworker ? selectedCoworker : 
        { profile_picture: "", full_name: "", phone_number: "", 
        subdivision: "", payment_type: "", pay_rate: "", address_residing: "", 
        actual_address: "", comment: "", is_foreign: false, post:'',
        is_active: false, date_fired: "", facility: 0})
    return (
        <div className='coworkers_modal_container'>
            <CoworkersModalHeader handleDeleteCoworker={handleDeleteCoworker} modalMethod={modalMethod} coworker={formData}/>
            <div className='coworkers_modal_form'>
                <div className='grid_photo'>
                    <input type="file" name="photo" id="photo" className="inputphoto" onChange={(event) => setFormData({...formData, profile_picture: event.target.files[0]})}/>
                    <label for="photo"><img src={formData.profile_picture ? formData.profile_picture : 'https://i.pinimg.com/originals/a6/e8/1b/a6e81b2bb0685ebab1d7b2f15283b7e4.jpg'} alt='coworker_picture'/></label>  
                </div>

                <div className='grid_full_name'>
                    <LargeField 
                        value={formData.full_name} 
                        setValue={(value) => setFormData({...formData, full_name:value})} 
                        fieldLabel='ФИО'/>
                </div>

                <div className='grid_date_birth'>
                    <LargeField 
                        value={formData.date_fired} 
                        setValue={(value) => setFormData({...formData, date_fired:value})} 
                        fieldLabel='Дата рождения' inputType='date'/>
                </div>

                <div className='grid_address'>
                    <LargeField 
                        value={formData.address_residing} 
                        setValue={(value) => setFormData({...formData, address_residing:value})} 
                        fieldLabel='Адрес прописки' inputType='text'/>
                </div>

                <div className='grid_fact_address'>
                    <LargeField 
                        value={formData.actual_address} 
                        setValue={(value) => setFormData({...formData, actual_address:value})} 
                        fieldLabel='Фактический адрес' inputType='text'/>
                </div>

                <div className='grid_phone_number'>
                    <LargeField 
                        value={formData.phone_number} 
                        setValue={(value) => setFormData({...formData, phone_number:value})} 
                        fieldLabel='Номер телефона'/>
                </div>

                <div className='grid_comment'>
                    <TextAreaField 
                        value={formData.comment} 
                        setValue={(value) => setFormData({...formData, comment:value})} 
                        fieldLabel='Комментарий'/>
                </div>

                <div className='grid_date_fired'>
                    <LargeField 
                        value={formData.date_fired} 
                        setValue={(value) => setFormData({...formData, date_fired:value})} 
                        fieldLabel='Дата приема' inputType='date'/>
                </div>

                <div className='grid_subdivision'>
                    <DropDownList 
                        options={subdivisionOpt} 
                        value={formData.subdivision} 
                        setValue={(value) => setFormData({...formData, subdivision:value})} 
                        fieldLabel='Подразделение'/>
                </div>

                <div className='grid_post'>
                    <LargeField 
                        value={formData.post} 
                        setValue={(value) => setFormData({...formData, post:value})} 
                        fieldLabel='Должность' inputType='text'/>
                </div>

                <div className='grid_docs'>
                    <DocsField fieldLabel="Прикрепить документы" fileTypes={fileTypes}/>
                </div>

                <div className='grid_payment_type'>
                    <DropDownList options={ptOpt} fieldLabel='Тип оплаты'/>
                </div>

                <div className='grid_pay_rate'>
                    <LargeField 
                        value={formData.pay_rate} 
                        setValue={(value) => setFormData({...formData, pay_rate:value})}  
                        inputType='number' fieldLabel='Ставка/Оклад'/>
                </div>
                <div className='grid_is_foreign insertion'>
                    <ToggleSwitch 
                        value={formData.is_foreign} 
                        setValue={() => setFormData({...formData, is_foreign:!formData.is_foreign})}/> 
                    <span className='with_toggle'>Иностранец</span>
                </div>

                <div className='grid_actions'>
                <section className='modal_actions'>
                    <Button onClickFunc={handleCloseCoworkerModal} buttonName="Закрыть" isBlue={false}/>
                    <Button onClickFunc={() => handleSendCoworker(formData)} buttonName={modalMethod === 'edit' ? "Сохранить" : "Добавить"} isBlue={true}/>
            </section>
                </div>
            </div>
        </div>
    )
}

export default CoworkersModal
