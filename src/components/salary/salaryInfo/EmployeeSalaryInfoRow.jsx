import React, { useState } from 'react'

function EmployeeSalaryInfoRow({ salary }) {
    const [curSalary, setCurSalary] = useState(salary)
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
    const handleChange = (event) =>{
        setCurSalary({...curSalary, [event.target.name] : event.target.value})
        salary[[event.target.name]] = event.target.value
        console.log(salary)
    }
    return (
        <div className='salary_info_row'>
            <div className='salary_info_row_inputs'>
                <section className='extra_small_field'>
                    <label className="label">Дата</label>
                    <input value={curSalary.date} type='date' name='date' className="input salary_info" onChange={(event) => handleChange(event)}/>
                </section>

                <section className='extra_small_field'>
                    {/* <label className="label">Вид начисления</label>
                    <input className="input salary_info"/> */}
                    <label className="label">Вид начисления</label>
                            <select className="input select salary_info"
                            onChange={(event) => handleChange(event)}
                            name='type_deduction'
                            value={curSalary.type_deduction}
                            placeholder='Введите значение...'>
                                {salariesTypes.map( (opt, key) => (
                                    <option key={key} value={opt.value} className='option' >{opt.display_name}</option>
                                ))}
                        </select>
                </section>

                <section className='extra_small_field'>
                    <label className="label">Сумма</label>
                    <input value={curSalary.amount} onChange={(event) => handleChange(event)}
                            name='amount' className="input salary_info"/>
                </section>
            </div>

            <div className="salary_info_row_actions">
                <button className="button">Удалить</button>
            </div>
            
            
        </div>
    )
}

export default EmployeeSalaryInfoRow
