import React from 'react'

function Button({buttonName, onClickFunc, isBlue}) {
    return (
        isBlue ? <button id='blue--btn' className="accept__button  inner-btns"  onClick={onClickFunc}>{buttonName}</button>
        :
                 <button className="accept__button  inner-btns"  onClick={onClickFunc}>{buttonName}</button>
    )
}

export default Button
