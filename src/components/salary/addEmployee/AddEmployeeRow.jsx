import React from 'react'

function AddEmployeeRow({ employee, handleAddEmployee }) {
    return (
        <div className='add_employee_row'>
            <span className='add_employee_text'>{employee.full_name}</span>
            <button onClick={() => handleAddEmployee(employee)} className='add_employee_text button'>Добавить</button>
        </div>
    )
}

export default AddEmployeeRow
