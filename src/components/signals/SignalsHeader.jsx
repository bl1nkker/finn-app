import React from 'react'

function SignalsHeader({ handleDeleteAll, signalsAmount }) {
    return (
        <>
            <section className='left'>
                <span className='left_text'>Сигналы</span>
            </section>

            <section className='right'>
                <button onClick={handleDeleteAll}><span className='right_text'>Забыть все</span></button>
                <hr />
                <span className='right_text'>{signalsAmount}</span>
            </section>
        </>
    )
}

export default SignalsHeader
