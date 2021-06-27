import React from 'react'

function Button({buttonName, onClickFunc, isBlue}) {
    return (
        isBlue ? <button className="modal_action blue_button" onClick={onClickFunc}>{buttonName}</button>
        :
                 <button className="modal_action red_button"  onClick={onClickFunc}>{buttonName}</button>
    )
}

export default Button
