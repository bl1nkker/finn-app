import React from 'react'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AddEmployeeRow from './AddEmployeeRow';
import AddEmployeeHeader from './AddEmployeeHeader';
const tempData = [
    {
      name:'Иванов Иван Иванович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
      prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
      retention:958, penalty:undefined, total: 40652
    },
    {
      name:'Иванов Марк Карлович', position:"Admin",bet:145, hours:8, percent:15, surcharge:1000, wage: 41610, 
      prepayment:11000, wage_:4368, medical:undefined, other:undefined, battle:undefined, form:undefined, 
      retention:958, penalty:undefined, total: 40652
    },]

function AddEmployeeModal({ handleCloseAddEmployeeModal, handleAddEmployee }) {
    return (
        <div className='add_employee_container'>
            <AddEmployeeHeader handleCloseAddEmployeeModal={handleCloseAddEmployeeModal}/>
            <section className='add_employee_content'>
                {tempData.map((employee, key) => 
                <AddEmployeeRow key={key} employee={employee} handleAddEmployee={handleAddEmployee}/>)}
            </section>
        </div>
    )
}

export default AddEmployeeModal
