import React from 'react'

function SignalTypeHeader({ type, signalsAmount }) {
    return (
        <div className='signal_type_header'>
            <section className='left'>
                <span className='left_text'>{type}</span>
            </section>
            
            <section className='right'>
                <span className='right_text'>{signalsAmount}</span>
            </section>
        </div>
    )
}

export default SignalTypeHeader
