import React, { useState } from 'react'
import './../../pages/pagesStyles/modal.css'
import Button from './Button'
import DoubleField from './DoubleField'
import LargeField from './LargeField'
import TextAreaField from './TextAreaField'
import ToggleSwitch from './ToggleSwitch'

function Modal({setOpenPopUp, modalMethod}) {
    const [formData, setFormData] = useState({
        actualBalance: undefined,
        comment: ''
    }) 

    const handleSubmit = () =>{
        // Send request with formData to backend 
        console.log(formData)
        setOpenPopUp(false)
    }

    const handleClose = () =>{
        setOpenPopUp(false)
    }

    return (
        <div className='modal_container'>
            <section className='modal_title'>
                <span>Some Title</span>
                <hr />
            </section>

            <section className='modal_field'>
                <DoubleField fieldLabel_1="Дата" fieldLabel_2="№ Накладной"/>
            </section>
            <section className='modal_field'>
                <LargeField fieldLabel="Оплата"/>
            </section>
            <section className='modal_field'>
                <LargeField fieldLabel="Поставщик"/>
            </section>
            <section className='modal_field'>
                <DoubleField fieldLabel_1="Сумма" fieldLabel_2="Сумма НДС"/>
            </section>
            <section className='modal_field'>
                <TextAreaField fieldLabel="Комментарий"/>
            </section>
            <section className='modal_field switch_field'>
                <ToggleSwitch />
                <p className='switch_title'>Сразу подтвердить</p>
            </section>
            <section className='modal_actions'>
                <Button onClickFunc={handleClose} buttonName="Закрыть" isBlue={false}/>
                <Button onClickFunc={handleSubmit} buttonName="Добавить" isBlue={true}/>
            </section>
        </div>
    )
}

export default Modal
