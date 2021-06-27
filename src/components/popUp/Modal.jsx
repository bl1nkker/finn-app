import React, { useState } from 'react'
import './../../pages/pagesStyles/modal.css'
import Button from './Button'
import DoubleField from './DoubleField'
import DropDownList from './DropDownList'
import LargeField from './LargeField'
import TextAreaField from './TextAreaField'
import ToggleSwitch from './ToggleSwitch'

// Redux
import { useDispatch } from 'react-redux'
import { createInvoice, updateInvoice } from './../../redux/actions/invoicesActions'

function Modal({setOpenPopUp, modalMethod, invoiceToEdit}) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(invoiceToEdit ? 
        {...invoiceToEdit, payment_type: invoiceToEdit.payment_type === 'Б' ? "Безналичный расчет" : "Наличный расчет"} 
        : {
        added_at:'2021-11-10',
        invoice_number:0,
        payment_type: 'Безналичный расчет',
        importer:"Астыкжан",
        amount:0.00,
        tax_amount:0.00,
        comment:'',
        is_confirmed:false,
        // Temp
        added_by:1,
        facilities:1
    }) 

    const paymentOptions = ['Безналичный расчет', "Наличный расчет"]
    const importersOptions = ['ТОО Магнит', "Астыкжан", "Пятерочка"]

    const handleSubmit = () =>{
        if (formData.payment_type === 'Безналичный расчет') formData.payment_type = 'Б'
        else if (formData.payment_type === 'Наличный расчет') formData.payment_type = 'Н'
        // Temp
        formData.importer = 1

        if (modalMethod === 'create'){
            dispatch(createInvoice(formData))
        }else if (modalMethod === 'edit'){
            dispatch(updateInvoice(formData, formData.id))
            
        }
        window.location.reload()
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
                <DoubleField 
                    value_1={formData.added_at} 
                    value_2={formData.invoice_number} 
                    setValue_1={(value) => setFormData({...formData, added_at:value})} 
                    setValue_2={(value) => setFormData({...formData, invoice_number:parseInt(value)})} 
                    fieldLabel_1="Дата" 
                    fieldLabel_2="№ Накладной" 
                    inputType_1="date" 
                    inputType_2="number"/>
            </section>
            <section className='modal_field'>
                {/* <LargeField fieldLabel="Оплата"/> */}
                <DropDownList 
                    value={formData.payment_type} 
                    setValue={(value) => setFormData({...formData, payment_type:value})}  
                    fieldLabel="Оплата" 
                    options={paymentOptions}/>
            </section>
            <section className='modal_field'>
                {/* <LargeField fieldLabel="Поставщик"/> */}
                <DropDownList 
                    fieldLabel="Поставщик" 
                    options={importersOptions}
                    value={formData.importer} 
                    setValue={(value) => setFormData({...formData, importer:value})} />
            </section>
            <section className='modal_field'>
                <DoubleField
                    value_1={formData.amount} 
                    value_2={formData.tax_amount} 
                    setValue_1={(value) => setFormData({...formData, amount:parseInt(value)})} 
                    setValue_2={(value) => setFormData({...formData, tax_amount:parseInt(value)})}  
                    fieldLabel_1="Сумма" 
                    fieldLabel_2="Сумма НДС" 
                    inputType_1="number" 
                    inputType_2="number"/>
            </section>
            <section className='modal_field'>
                <TextAreaField 
                    value={formData.comment}
                    setValue={(value) => setFormData({...formData, comment:value})}
                    fieldLabel="Комментарий"/>
            </section>
            <section className='modal_field switch_field'>
                <ToggleSwitch 
                    value={formData.is_confirmed} 
                    setValue={() => setFormData({...formData, is_confirmed:!formData.is_confirmed})}/>
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
