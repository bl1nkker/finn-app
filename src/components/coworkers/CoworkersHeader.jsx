import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';

function CoworkersHeader({ handleOpenCoworkerModal }) {

    return (
        <section className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Сотрудники</p>
                </section>
                
                <section className='right'>
                    <button onClick={() => handleOpenCoworkerModal("create", null)}><AddCircleOutlineIcon className='icon_green'/></button>
                </section>
            </div>
            <hr />
            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item semilarge'>
                    <span className="item-text bold_text">ФИО</span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item large'>
                    <span className="item-text bold_text">Номер телефона</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semilarge'>
                    <span className="item-text bold_text">Должность</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semilarge'>
                    <span className="item-text bold_text">Статус</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
            </div>
        </section>

    )
}

export default CoworkersHeader
