import React from 'react'

function LargeField({ fieldLabel, inputType }) {
    return (
        <div className='modal_largefield'>
                <label className="label">{fieldLabel}</label>
                <input className="input" type={inputType}/>
        </div>
    )
}

export default LargeField
