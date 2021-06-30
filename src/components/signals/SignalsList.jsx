import React from 'react'
import SignalCard from './SignalCard'

function SignalsList({ signals, handleDeleteCard, cashInconsistencySignals, negativeBalanceSignals, checkDocsSignals }) {
    return (
        <>
            <section className='signal_list_section'>
                {negativeBalanceSignals.map((signal, key) => 
                <SignalCard handleDeleteCard={handleDeleteCard} key={key} signal={signal}/>)}
            </section>
            <section className='signal_list_section'>
                {checkDocsSignals.map((signal, key) => 
                <SignalCard handleDeleteCard={handleDeleteCard} key={key} signal={signal}/>)}
            </section>
            <section className='signal_list_section'>
                {cashInconsistencySignals.map((signal, key) => 
                <SignalCard handleDeleteCard={handleDeleteCard} key={key} signal={signal}/>)}
            </section>
        </>
    )
}

export default SignalsList
