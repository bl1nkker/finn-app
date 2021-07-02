import React from 'react'

function LargeField({ fieldLabel, inputType, value, setValue}) {
    return (
        <div className='modal_largefield'>
                <label className="label">{fieldLabel}</label>
                <input className="input" value={value} onChange={event => setValue(event.target.value)} type={inputType}/>
        </div>
    )
}

export default LargeField
