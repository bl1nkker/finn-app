import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function SignalCard({ signal, handleDeleteCard }) {
    return (
        <div className="signal_card_container">
            <section className="signal_card_title">
                <span className='title_text'>Внимание!</span>
                <button onClick={() => handleDeleteCard(signal)} className='title_button'><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
            </section>
            <hr />
            <section className="signal_card_content">
                <p className='content_text'>{signal.content}</p>
            </section>
        </div>
    )
}

export default SignalCard
