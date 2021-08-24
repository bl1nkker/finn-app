import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function SignalCard({ signal, handleDeleteCard, handleOpenSignalModal }) {
    return (
        <div className="signal_card_container">
            <section className="signal_card_title">
                <div className='title_left_button'>
                    <button onClick={() => handleOpenSignalModal(signal)}><span className='title_text'>Внимание!</span></button>
                </div>
                
                <div className='title_right_button'>
                    <button onClick={() => handleDeleteCard(signal)} ><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
                </div>
            </section>
            <hr />
            <section className="signal_card_content">
                <p className='content_text'>{signal.message}</p>
            </section>
        </div>
    )
}

export default SignalCard
