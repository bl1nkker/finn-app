import React from 'react'

function LargeField({value, onChangeFunc, type, labelValue}) {
    return (
        <>
            <label className="remainder accept__addit-remainder">{labelValue}</label>
            <input 
                className="accept__remainder accept__addit-input" 
                value={value} 
                onChange={(event) => onChangeFunc(event)}
                type={type}/>
        </>
    )
}

export default LargeField
