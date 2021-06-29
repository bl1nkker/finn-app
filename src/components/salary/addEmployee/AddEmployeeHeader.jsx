import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function AddEmployeeHeader({ handleCloseAddEmployeeModal }) {
    return (
        <section className='add_employee_header'>
                <div className='header_top'>
                    <span>Добавление сотрудников</span>
                    <button onClick={handleCloseAddEmployeeModal}><CancelOutlinedIcon className='cancel_button' fontSize='small'/></button>
                </div>
                <hr />
                <div className='header_bot'>
                    <span>Сотрудник</span>
                    <span>Search Bar</span>
                </div>
            </section>
    )
}

export default AddEmployeeHeader
