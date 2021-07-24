import React from 'react'

function DropDownList({ value, setValue,fieldLabel, options, isFuckedUp }) {
    return (
        <div className='modal_largefield'>
            <label className="label">{fieldLabel}</label>
            <select className="input select"
            value={value} 
            onChange={(event) => setValue(event.target.value)}
            placeholder='Введите значение...'>
                {[...options].map( (option, key) => (
                    <option key={key} value={isFuckedUp ? option.id : option} className='option' >{isFuckedUp ? option.company_name : option}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDownList