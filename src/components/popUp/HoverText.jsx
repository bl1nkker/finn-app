import React from 'react'
import './../../pages/pagesStyles/hoverText.css'

function HoverText({ text }) {
    return (
        <div className='hover_text_container'>
            <span className='text'>Added by: {text}</span>
        </div>
    )
}

export default HoverText
