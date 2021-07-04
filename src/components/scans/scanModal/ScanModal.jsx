import React, { useState } from 'react'
import LargeField from './../../popUp/LargeField'
import Button from '../../popUp/Button'
import ScanModalHeader from './ScanModalHeader'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
function ScanModal({ selectedScan, handleCloseScanModal, handleSendScan, handleDeleteScan, modalMethod, handleAddScan }) {

    const [formData, setFormData] = useState(selectedScan ? selectedScan : 
        {id: undefined, type_scan: "1", name: "", file: "", added_at: "",facility: 0})

    const handleSubmitScan = (file) =>{
        handleAddScan(file)
        setFormData({...formData, name: file.name})
    }
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
                    <input onChange={(event) => handleSubmitScan(event.target.files[0])} type="file" name="file" id="file" className="inputfile" />
                    <label htmlFor="file">
                        <InsertDriveFileOutlinedIcon fontSize='small'/>
                        <span>{formData.name}</span>
                    </label>
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
