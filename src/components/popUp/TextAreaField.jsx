import React from 'react'

function TextAreaField({ fieldLabel }) {
    return (
        <div className='modal_textareafield'>
                <label className="label">{fieldLabel}</label>
                <textarea className="textarea"/>
        </div>
    )
}

export default TextAreaField
