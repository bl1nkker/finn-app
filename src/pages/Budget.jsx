import React, { useEffect, useState } from 'react'
import BudgetContent from '../components/budget/BudgetContent'
import BudgetHeader from '../components/budget/BudgetHeader'
import AddBudgetModal from '../components/budget/addBudget/AddBudgetModal'
import BudgetTableHeader from '../components/budget/BudgetTableHeader'
import Backdrop from '../components/confirmationWindow/Backdrop'
import './pagesStyles/budget.css'
import './pagesStyles/addBudget.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createBudget, fetchBudgets, removeBudget, updateBudget } from './../redux/actions/budgetActions'

function Budget() {
    const dispatch = useDispatch()
    // Change this to ID
    // When API will be ready, connect this to all components
    const budgets = useSelector(state => state.budgets.data)
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    // income/expense
    const [budgetType, setBudgetType] = useState('')
    // create/edit/idle
    const [modalMethod, setModalMethod] = useState('idle')
    const [selectedBudget, setSelectedBudget] = useState(null)
    const [formError, setFormError] = useState(false)
    // calendar
    const date = new Date();
    // Select current month (first day and last day)
    const [startDate, setStartDate] = useState(new Date(date.getFullYear(), date.getMonth(), 2).toISOString().substring(0, 10))
    const [endDate, setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 1).toISOString().substring(0, 10))
    const [ordering, setOrdering] = useState('amount')

    useEffect(() =>{
        dispatch(fetchBudgets("income", startDate, endDate, ordering))
        dispatch(fetchBudgets("expense", startDate, endDate, ordering))
    }, [dispatch, startDate, endDate, ordering])

    let incomeAmount = 0
    let expenseAmount = 0
    budgets.map( budget => budget.incomes.map(income => incomeAmount += income.amount) )
    budgets.map( budget => budget.expenses.map(expense => expenseAmount += expense.amount) )
    
    const handleOpenBudgetModal = (type, method, budget) =>{
        setSelectedBudget(budget)
        setModalMethod(method)
        setShowAddBudgetModal(true);
        setBudgetType(type)
    }
    const handleCloseBudgetModal = () =>{
        setSelectedBudget(null)
        setModalMethod("idle")
        setShowAddBudgetModal(false);
        setBudgetType('')
    }

    const handleAddBudget = (formData) =>{
        const currentUser = localStorage.getItem("uid")
        formData = {...formData, added_by: currentUser}
        // {id: undefined, amount: 0, description: "", is_verified: false, contragent: "", 
        // added_at: "", added_by: "",category: "",facility: 0}
        if (!formData.amount || !formData.description || !formData.added_at)
        setFormError(true)
        else{
            if (modalMethod === "edit") {
                formData = {...formData, contragent: 'Temp contragent'}
                dispatch(updateBudget(budgetType, formData, formData.id))
                console.log(`Editing budget with type ${budgetType}...`, formData);
            }
            else if (modalMethod === "create") {
                dispatch(createBudget(budgetType, formData))
                console.log(`Adding budget with type ${budgetType}...`, formData);
            }
            setSelectedBudget(null)
            setModalMethod("idle")
            setShowAddBudgetModal(false);
            setBudgetType('')
            window.location.reload()
        }
    }

    const handleDeleteBudget = (budget, budgetType) =>{
        dispatch(removeBudget(budgetType, budget.id))
        setSelectedBudget(null)
        setModalMethod("idle")
        setShowAddBudgetModal(false);
        setBudgetType('')
        window.location.reload()
    }
    return (
        <div className='table_container'>
            
            {showAddBudgetModal && <>
                <Backdrop />
                <AddBudgetModal formError={formError} handleDeleteBudget={handleDeleteBudget} selectedBudget={selectedBudget} modalMethod={modalMethod} budgetType={budgetType} handleAddBudget={handleAddBudget} handleCloseBudgetModal={handleCloseBudgetModal}/>
            </>}
            <BudgetHeader startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} incomeAmount={incomeAmount} expenseAmount={expenseAmount}/>
            <BudgetTableHeader ordering={ordering} setOrdering={setOrdering} incomeAmount={incomeAmount} expenseAmount={expenseAmount} handleOpenBudgetModal={handleOpenBudgetModal}/>
            <BudgetContent handleOpenBudgetModal={handleOpenBudgetModal} budgets={budgets}/>
        </div>
    )
}

export default Budget
