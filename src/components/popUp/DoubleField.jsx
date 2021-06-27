import React from 'react'

function DoubleField({value_1, setValue_1, value_2, setValue_2, fieldLabel_1, fieldLabel_2, inputType_1, inputType_2}) {
    return (
        <div className='modal_doublefield'>
            <section className='small_field'>
                <label className="label">{fieldLabel_1}</label>
                <input value={value_1} className="input" onChange={(event) => setValue_1(event.target.value)} type={inputType_1}/>
            </section>
            <section className='small_field'>
                <label className="label">{fieldLabel_2}</label>
                <input value={value_2} onChange={(event) => setValue_2(event.target.value)} className="input" type={inputType_2}/>
            </section>
            
        </div>
    )
}

export default DoubleField
