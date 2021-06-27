import React from 'react'

function TextAreaField({value, onChangeFunc, type, labelValue}) {
    return (
        <>
            <label className="remainder accept__addit-remainder textarea-remainder">{labelValue}</label>
                <textarea 
                className="accept__addit-textarea" 
                value={value} 
                onChange={(event) => onChangeFunc(event)}/>
        </>
    )
}

export default TextAreaField
