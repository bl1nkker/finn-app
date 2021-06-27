import React from 'react'

function DoubleField({fieldLabel_1, fieldLabel_2, inputType_1, inputType_2}) {
    return (
        <div className='modal_doublefield'>
            <section className='small_field'>
                <label className="label">{fieldLabel_1}</label>
                <input className="input" type={inputType_1}/>
            </section>
            <section className='small_field'>
                <label className="label">{fieldLabel_2}</label>
                <input className="input" type={inputType_2}/>
            </section>
            
        </div>
    )
}

export default DoubleField
