import React from 'react'

function EmployeeSalaryInfoRow() {
    return (
        <div className='salary_info_row'>
            <div className='salary_info_row_inputs'>
                <section className='extra_small_field'>
                    <label className="label">Дата</label>
                    <input className="input salary_info"/>
                </section>

                <section className='extra_small_field'>
                    <label className="label">Вид начисления</label>
                    <input className="input salary_info"/>
                </section>

                <section className='extra_small_field'>
                    <label className="label">Сумма</label>
                    <input className="input salary_info"/>
                </section>
            </div>

            <div className="salary_info_row_actions">
                <button className="button">Удалить</button>
            </div>
            
            
        </div>
    )
}

export default EmployeeSalaryInfoRow
