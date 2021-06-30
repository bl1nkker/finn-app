import React from 'react'
import './../../pages/pagesStyles/signalModal.css'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function SignalModal({ setShowSignalModal, selectedSignal }) {
    return (
        <div className='signal_modal_container'>
            <section className='signal_modal_header'>
                <span className='header_text'>Внимание!</span>
                <button onClick={() => setShowSignalModal(false)}><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
            </section>
            <hr />
            <section className='signal_modal_content'>
                <p className='content_paragraph'>{selectedSignal.content}</p>
            </section>
        </div>
    )
}

export default SignalModal
