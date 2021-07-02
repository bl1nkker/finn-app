import React, { useState } from 'react'
import EmployeeSalaryInfoRow from './EmployeeSalaryInfoRow';
import EmployeeSalaryInfoHeader from './EmployeeSalaryInfoHeader';
import Button from '../../popUp/Button';
import TextAreaField from '../../popUp/TextAreaField';
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';

function EmployeeSalaryInfoModal({ handleCloseEmployeeSalaryInfoModal, selectedEmployee, handleSaveEmployeeSalaryInfo, handlePrintEmployeeSalaryInfo }) {
    const [employeeSalaries, setEmployeeSalaries] = useState([{}, {}, {}])

    const handleAddSalaryField = () =>{
        const newField = {}
        setEmployeeSalaries([...employeeSalaries, newField])
    }

    return (
        <div className='salary_info_container'>
            <EmployeeSalaryInfoHeader handleCloseEmployeeSalaryInfoModal={handleCloseEmployeeSalaryInfoModal} selectedEmployee={selectedEmployee}/>
            
            <section className='salary_info_content'>
                {employeeSalaries.map((salary, key) => <EmployeeSalaryInfoRow key={key} />)}
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
                <Button onClickFunc={() => handleSaveEmployeeSalaryInfo("Some data")} buttonName="Сохранить" isBlue={true}/>
            </section>
        </div>
    )
}

export default EmployeeSalaryInfoModal
