import React, { useState } from 'react'
import EmployeeSalaryInfoRow from './EmployeeSalaryInfoRow';
import EmployeeSalaryInfoHeader from './EmployeeSalaryInfoHeader';
import Button from '../../popUp/Button';
import TextAreaField from '../../popUp/TextAreaField';
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';

function EmployeeSalaryInfoModal({ handleCloseEmployeeSalaryInfoModal, selectedEmployee, handleSaveEmployeeSalaryInfo, handlePrintEmployeeSalaryInfo }) {
    const [employeeDeductions, setEmployeeDeductions] = useState(selectedEmployee.deductions)
    const handleAddSalaryField = () =>{
        const newField = {type_deduction: "", date: "", amount: 0, commentary: "Some comment", employee: selectedEmployee.id, created: true}
        setEmployeeDeductions([...employeeDeductions, newField])
    }

    return (
        <div className='salary_info_container'>
            <EmployeeSalaryInfoHeader handleCloseEmployeeSalaryInfoModal={handleCloseEmployeeSalaryInfoModal} selectedEmployee={selectedEmployee}/>
            
            <section className='salary_info_content'>
                {employeeDeductions.map((salary, key) => <EmployeeSalaryInfoRow salary={salary} key={key} />)}
                <hr />
            </section>

            <section className='salary_info_add'>
                <button onClick={handleAddSalaryField} className='button'>Добавить начисление</button>
            </section>

            <section className='salary_info_comment'>
                <TextAreaField fieldLabel="Комментарий" value='some comment'/>
            </section>

            <section className='salary_info_print'>
                <button onClick={handlePrintEmployeeSalaryInfo} className='button'>
                    <LocalPrintshopOutlinedIcon className='icon_print'/>
                    <span className='print_text'>Распечатать зарплатный лист</span>
                </button>
                
            </section>

            <section className='modal_actions'>
                <Button onClickFunc={handleCloseEmployeeSalaryInfoModal} buttonName="Закрыть" isBlue={false}/>
                <Button onClickFunc={() => handleSaveEmployeeSalaryInfo(employeeDeductions)} buttonName="Сохранить" isBlue={true}/>
            </section>
        </div>
    )
}

export default EmployeeSalaryInfoModal
