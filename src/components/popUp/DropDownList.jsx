import React from 'react'

function DropDownList({ value, setValue,fieldLabel, options }) {
    return (
        <div className='modal_largefield'>
            <label className="label">{fieldLabel}</label>
            <select className="input select"
            value={value} 
            onChange={(event) => setValue(event.target.value)}>
                {[...options, value].map( (option, key) => (
                    <option key={key} value={option} className='option' >{option}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDownList