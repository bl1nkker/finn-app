import React, { useState } from 'react'
import LargeField from './../../popUp/LargeField'
import Button from '../../popUp/Button'
import ScanModalHeader from './ScanModalHeader'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
function ScanModal({ formError, selectedScan, handleCloseScanModal, handleSendScan, handleDeleteScan, modalMethod }) {

    const [formData, setFormData] = useState(selectedScan ? selectedScan : 
        {type_scan: "1", name: "", file: "", facility: 1})

    const handleSubmitScan = (file) =>{
      console.log(file)
      console.log(formData)
      setFormData({...formData, file: file})
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
                {formError && <div className="error_message">Fill in all the fields on this side</div>}
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