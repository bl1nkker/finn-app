import { useState, useEffect } from 'react'

// Components
import SalaryHeader from '../components/salary/SalaryHeader';
// Styles
import './pagesStyles/tableHeader.css'
import './pagesStyles/registryRow.css'
import './pagesStyles/calendar.css'
import './pagesStyles/addEmployee.css'
import './pagesStyles/salaryInfo.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from './../redux/actions/invoicesActions'
import SalaryDataRow from '../components/salary/SalaryDataRow';
import SalaryTotalRow from '../components/salary/SalaryTotalRow';
import Backdrop from '../components/confirmationWindow/Backdrop'
import CalendarPersonal from '../components/salary/calendar/CalendarPersonal';
import CalendarShared from '../components/salary/calendar/CalendarShared';
import AddEmployeeModal from '../components/salary/addEmployee/AddEmployeeModal';
import EmployeeSalaryInfoModal from '../components/salary/salaryInfo/EmployeeSalaryInfoModal';
import { addSalary, addWorkHours, fetchCoworkers, updateSalary, updateWorkHours } from '../redux/actions/salariesActions';

function Registry() {
  const dispatch = useDispatch()
  const [showPersonalCalendar, setShowPersonalCalendar] = useState(false)
  const [showSharedCalendar, setShowSharedCalendar] = useState(false)
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false)
  const [showEmployeeSalaryInfo, setShowEmployeeSalaryInfo] = useState(false)

  const [selectedEmployee, setSelectedEmployee] = useState({})
  const coworkersWithSalaries = useSelector(state => state.salaries.data)

  useEffect(() =>{
    dispatch(fetchCoworkers())
  }, [dispatch])

  // Personal Calendar
  const handleOpenPersonalCalendar = (employee) => {
    setSelectedEmployee(employee)
    setShowPersonalCalendar(true)
  }
  const handleClosePersonalCalendar = () =>{
    setSelectedEmployee({})
    setShowPersonalCalendar(false)
  }
  const handleSavePersonalHours = (data) =>{
    // Request to backend
    setShowPersonalCalendar(false)
    for (let index = 0; index < data.length; index++) {
      if (data[index].updated){
        // Update
        if (data[index].id){
          dispatch(updateWorkHours(data[index], data[index].id))
          console.log("Updating", data[index])
        }
        // Create
        else{
          dispatch(addWorkHours(data[index]))
          console.log('Creating', data[index])
        }
      }
      
    }
    console.log('Personal work hours saved!', data);
  }

  // Shared Calendar
  const handleOpenSharedCalendar = () =>{
    setShowSharedCalendar(true)
  }
  const handleCloseSharedCalendar = () =>{
    setShowSharedCalendar(false)
  }
  const handleSaveSharedHours = (data) =>{
    // Request to backend
    setShowSharedCalendar(false)
    for (let index = 0; index < data.length; index++) {
      if (data[index].id){
        dispatch(updateWorkHours(data[index], data[index].id))
        console.log("Updating", data[index])
      }
      // Create
      else{
        dispatch(addWorkHours(data[index]))
        console.log('Creating', data[index])
      }
    }
    console.log('Shared work hours saved!', data);
  }

  // Add employee
  const handleOpenAddEmployeeModal = () =>{
    setShowAddEmployeeModal(true)
  }
  const handleCloseAddEmployeeModal = () =>{
    setShowAddEmployeeModal(false)
  }
  const handleAddEmployee = (employee) =>{
    // Request to backend
    console.log('Employee added!', employee);
  }

  
  // Employee Salary Info
  const handleOpenEmployeeSalaryInfo = (employee) =>{
    setShowEmployeeSalaryInfo(true)
    setSelectedEmployee(employee)
  }
  const handleCloseEmployeeSalaryInfo = () =>{
    setShowEmployeeSalaryInfo(false)
    setSelectedEmployee({})
  }
  const handleSaveEmployeeSalaryInfo = (deductions) =>{
    setShowEmployeeSalaryInfo(false)
    for (let index = 0; index < deductions.length; index++) {
      if (deductions[index].created){
        // Create
        dispatch(addSalary(deductions[index]))
        console.log('Creating', deductions[index])
      }else{
        // Update
        dispatch(updateSalary(deductions[index], deductions[index].id))
        console.log('Update', deductions[index])
      }
      
    }
    console.log('Employee salary info saved!', deductions);
  }
  const handlePrintEmployeeSalaryInfo = (data) =>{
    console.log("*print print*");
  }
  

  return (
    <div className='table_container'>
      {/* Add employee modal */}
      {showAddEmployeeModal && <>
        <Backdrop />
        <AddEmployeeModal handleAddEmployee={handleAddEmployee} selectedEmployee={selectedEmployee} handleCloseAddEmployeeModal={handleCloseAddEmployeeModal}/>
      </>}

      {/* Add employee modal */}
      {showEmployeeSalaryInfo && <>
        <Backdrop />
        <EmployeeSalaryInfoModal 
          handleSaveEmployeeSalaryInfo={handleSaveEmployeeSalaryInfo} 
          handleCloseEmployeeSalaryInfoModal={handleCloseEmployeeSalaryInfo} 
          selectedEmployee={selectedEmployee}
          handlePrintEmployeeSalaryInfo={handlePrintEmployeeSalaryInfo}/>
      </>}

      {/* Personal Calendar */}
      {showPersonalCalendar && <>
        <Backdrop />
        <CalendarPersonal handleSavePersonalHours={handleSavePersonalHours} selectedEmployee={selectedEmployee} handleCloseCalendar={handleClosePersonalCalendar}/>
      </>}

      {/* Shared Calendar */}
      {showSharedCalendar && <>
        <Backdrop />
        <CalendarShared handleSaveSharedHours={handleSaveSharedHours} employeesList={coworkersWithSalaries} handleCloseCalendar={handleCloseSharedCalendar}/>
      </>}

      {/* Header */}
      <SalaryHeader handleOpenAddEmployeeModal={handleOpenAddEmployeeModal}/>

      {/* Main content */}
      {coworkersWithSalaries.map((employee, key) => <SalaryDataRow handlePrintEmployeeSalaryInfo={handlePrintEmployeeSalaryInfo} handleOpenEmployeeSalaryInfo={handleOpenEmployeeSalaryInfo} key={key} handleOpenCalendar={handleOpenPersonalCalendar} employee={employee}/>)}

      {/* Bottom Row */}
      <SalaryTotalRow handleOpenCalendar={handleOpenSharedCalendar}/>
    </div>
  );
}

export default Registry;