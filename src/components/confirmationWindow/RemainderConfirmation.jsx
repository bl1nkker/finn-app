import React from 'react'
import Backdrop from './Backdrop'
import ConfirmationWindow from './ConfirmationWindow'
import './../../pages/pagesStyles/remainderConfirmation.css'
import './../../pages/pagesStyles/Dashboard.css'

function RemainderConfirmation({setIsConfirmed}) {
    return (
        <div>
            <Backdrop /> 
            <ConfirmationWindow setIsConfirmed={setIsConfirmed}/>
        </div>
    )
}

export default RemainderConfirmation
