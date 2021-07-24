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
import { createInvoice, removeInvoice, updateInvoice } from './../../redux/actions/invoicesActions'

function Modal({setOpenPopUp, modalMethod, invoiceToEdit, importers}) {
    const dispatch = useDispatch()
    const paymentOptions = ['Безналичный расчет', "Наличный расчет"]
    let [formData, setFormData] = useState(invoiceToEdit ? 
        {...invoiceToEdit, payment_type: invoiceToEdit.payment_type === 'Б' ? "Безналичный расчет" : "Наличный расчет"} 
        : {
        added_at:'2021-11-10',
        invoice_number:0,
        payment_type: paymentOptions[0],
        importer:importers[0],
        amount:0.00,
        tax_amount:0.00,
        comment:'',
        is_confirmed:false,
        // Temp
        added_by:1,
        facilities:1
    }) 

    

    const handleSubmit = () =>{
        if (formData.payment_type === 'Безналичный расчет') formData.payment_type = 'Б'
        else if (formData.payment_type === 'Наличный расчет') formData.payment_type = 'Н'

        const currentUser = localStorage.getItem("uid")
        formData = {...formData, added_by: currentUser}

        if (modalMethod === 'create'){
            dispatch(createInvoice(formData))
        }else if (modalMethod === 'edit'){
            dispatch(updateInvoice(formData, formData.id))
            
        }
        window.location.reload()
        setOpenPopUp(false)
    }

    const handleDelete = () =>{
        dispatch(removeInvoice(formData.id))
        window.location.reload()
    }
    
    const handleClose = () =>{
        setOpenPopUp(false)
    }
    return (
        <div className='modal_container'>
            <section className='modal_header'>
                <div className='modal_title'>
                    <span>{modalMethod === 'edit' ? invoiceToEdit.importer : "Добавление накладной/счета"}</span>
                    {modalMethod === 'edit' && <button onClick={handleDelete} className='delete'>Удалить</button>}
                </div>
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
                    options={paymentOptions}
                    />
            </section>
            <section className='modal_field'>
                {/* <LargeField fieldLabel="Поставщик"/> */}
                <DropDownList 
                    fieldLabel="Поставщик" 
                    options={importers}
                    value={formData.importer} 
                    setValue={(value) => setFormData({...formData, importer:value})}
                    isFuckedUp={true} />
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
                {/* Send request to update is_confirmed prop of the invoice */}
                <ToggleSwitch 
                    value={formData.is_confirmed} 
                    setValue={() => setFormData({...formData, is_confirmed:!formData.is_confirmed})}/>
                <p className='switch_title'>{modalMethod === 'edit' ? "Подтверждено" : "Сразу подтвердить"}</p>
            </section>
            <section className='modal_actions'>
                <Button onClickFunc={handleClose} buttonName="Закрыть" isBlue={false}/>
                <Button onClickFunc={handleSubmit} buttonName={modalMethod === 'edit' ? "Сохранить" : "Добавить"} isBlue={true}/>
            </section>
        </div>
    )
}

export default Modal
