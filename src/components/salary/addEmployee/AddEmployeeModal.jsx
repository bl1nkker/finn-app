import React from 'react'
import AddEmployeeRow from './AddEmployeeRow';
import AddEmployeeHeader from './AddEmployeeHeader';

function AddEmployeeModal({ choosenCoworkers, coworkersWithSalaries, handleCloseAddEmployeeModal, handleAddEmployee }) {
    return (
        <div className='add_employee_container'>
            <AddEmployeeHeader handleCloseAddEmployeeModal={handleCloseAddEmployeeModal}/>
            <section className='add_employee_content'>
                {coworkersWithSalaries?.map((employee, key) => choosenCoworkers.indexOf(employee) === -1 &&
                (<AddEmployeeRow key={key} employee={employee} handleAddEmployee={handleAddEmployee}/>))}
            </section>
        </div>
    )
}

export default AddEmployeeModal
