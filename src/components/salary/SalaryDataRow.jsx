import React, { useState, useEffect } from 'react'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
function SalaryDataRow({employee, handleOpenCalendar}) {
    return (
        <div className={`registry_row`}>
                    <section className='registry_row__item left_align item semimedium'>
                        <span className="item-text bold_text ">{employee.name}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{employee.position}/DD</span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text"><button onClick={() => handleOpenCalendar(employee)} className='hours'>{employee.hours}</button></span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.bet}</span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text">{employee.percent}</span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.surcharge}</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.wage}</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.prepayment}</span>              
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{employee.wage_}</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.medical === undefined ? '-' : employee.medical}</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.other === undefined ? '-' : employee.other}</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.battle === undefined ? '-' : employee.battle}</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.form === undefined ? '-' : employee.form}</span>             
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{employee.retention}</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.penalty === undefined ? '-' : employee.penalty}</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.total}</span>             
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <button><DescriptionOutlinedIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default SalaryDataRow
