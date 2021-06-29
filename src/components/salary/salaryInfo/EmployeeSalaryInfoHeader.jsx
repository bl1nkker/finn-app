import React from 'react'

function EmployeeSalaryInfoHeader({ selectedEmployee, handleCloseEmployeeSalaryInfoModal }) {
    return (
        <section className='salary_info_header'>
            <div className='header_top'>
                <span className='employee_name'>{selectedEmployee.name}</span>
                <button className='button' onClick={handleCloseEmployeeSalaryInfoModal}>Удалить</button>
            </div>
            <hr />
        </section>
    )
}

export default EmployeeSalaryInfoHeader
