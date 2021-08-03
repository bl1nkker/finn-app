import React, { useState, useEffect } from 'react'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
function SalaryDataRow({handlePrintEmployeeSalaryInfo, employee, handleOpenCalendar, handleOpenEmployeeSalaryInfo}) {
    const subdivisionOpt = [
        {id:'1', name:'Администрация'},
        {id:'2', name:'Бар'},
        {id:'3', name:'Официанты'},
        {id:'4', name:'Кухня'},
        {id:'5', name:'Технический Персонал'},
    ]
    const salariesTypes = [
        {
            value: "1",
            display_name: "Аванс"
        },
        {
            value: "2",
            display_name: "ЗП Безнал"
        },
        {
            value: "3",
            display_name: "Мед Кн"
        },
        {
            value: "4",
            display_name: "VR"
        },
        {
            value: "5",
            display_name: "Бой"
        },
        {
            value: "6",
            display_name: "Форма"
        },
        {
            value: "7",
            display_name: "Удержание по сверкам"
        },
        {
            value: "8",
            display_name: "Удержание по акту списания"
        },
        {
            value: "9",
            display_name: "Штраф"
        }
    ]
    return (
        <div className={`registry_row`}>
                    <section onClick={() => handleOpenEmployeeSalaryInfo(employee)} className='registry_row__item left_align item semimedium employee_info'>
                        <span className="item-text bold_text ">{employee.full_name}</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">{subdivisionOpt.find(sbd => sbd.id === employee.subdivision).name}</span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text">
                                <button onClick={() => handleOpenCalendar(employee)} className='hours'>
                                {employee.work_hours.reduce((acc, curr) => acc += curr.amount, 0)}
                                </button>
                            </span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.pay_rate}</span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text">{employee.percent}</span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            0
                        </span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">0</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '1' ? curr.amount : 0, 0)}
                        </span>              
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '2' ? curr.amount : 0, 0)}
                        </span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '3' ? curr.amount : 0, 0)}
                        </span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                    <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '4' ? curr.amount : 0, 0)}
                        </span>           
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '5' ? curr.amount : 0, 0)}
                        </span>            
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '6' ? curr.amount : 0, 0)}
                        </span>              
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '7' ? curr.amount : 0, 0)}
                        </span>               
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">
                            {employee.deductions.reduce((acc, curr) => acc += curr.type_deduction === '9' ? curr.amount : 0, 0)}
                        </span>            
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text">{employee.total}</span>             
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <button onClick={handlePrintEmployeeSalaryInfo}><DescriptionOutlinedIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default SalaryDataRow
