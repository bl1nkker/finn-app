import React from 'react'

function TextAreaField({ value, setValue, fieldLabel }) {
    return (
        <div className='modal_textareafield'>
                <label className="label">{fieldLabel}</label>
                <textarea value={value} onChange={(event) => setValue(event.target.value)} className="textarea"/>
        </div>
    )
}

export default TextAreaField
