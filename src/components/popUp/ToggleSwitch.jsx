import React from 'react'

function ToggleSwitch({ value, setValue }) {
    return (
        <label className="modal_switch">
           <input className="switch_input" type="checkbox" checked={value} onChange={setValue}/>
           <span className="switch_slider"/> 
        </label>
    )
}

export default ToggleSwitch
