import React, { useState } from 'react'
import LargeField from './../../popUp/LargeField'
import Button from '../../popUp/Button'
import ScanModalHeader from './ScanModalHeader'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

function ScanModal({ selectedScan, handleCloseScanModal, handleSendScan, handleDeleteScan, modalMethod, handleAddScan }) {

    const [formData, setFormData] = useState(selectedScan ? selectedScan : 
        {id: undefined, type_scan: "1", name: "", file: "", added_at: "",facility: 0})

    return (
        <div className='revenue_modal_container'>
            <ScanModalHeader handleDeleteScan={handleDeleteScan} modalMethod={modalMethod} scan={formData}/>
            <div className='revenue_modal_form'>
                <section className='modal_field'>
                    <LargeField fieldLabel="Имя" 
                                value={formData.name} 
                                setValue={(value) => setFormData({...formData, name:value})}/>
                </section>
                
                <section className='modal_field'>
                    {/* Add input field here! */}
                    <button onClick={() => handleAddScan(formData)} className='button'>
                        <InsertDriveFileIcon className='icon_blue'/>
                        <span className='text_blue'>{formData.name}</span>
                    </button>
                </section>

                <section className='modal_actions scans'>
                    <Button 
                    onClickFunc={handleCloseScanModal} 
                    buttonName="Закрыть" isBlue={false}/>
                    <Button 
                    onClickFunc={() => handleSendScan(formData)} 
                    buttonName={modalMethod === 'create' ? "Добавить": "Сохранить"} isBlue={true}/>
                </section>
            </div>

            </div>
    )
}

export default ScanModal
