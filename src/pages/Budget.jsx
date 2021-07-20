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
import { createBudget, fetchBudgets, updateBudget } from './../redux/actions/budgetActions'
import TableCalendar from '../components/tableCalendar/TableCalendar'

const tempBudgets = [
    {
        added_at: '2020-10-10',
        expenses:[
            {id: 1, amount: 21305, description: "Default expense", is_verified: false, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 2, amount: 21305, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 3, amount: 21305, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 4, amount: 21305, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 5, amount: 21305, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 6, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 7, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
            {id: 8, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-10-10", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
    {
        added_at: '2020-01-30',
        expenses:[
            {id: 9, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-01-30", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 10, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-01-30", added_by: "Washington DC",category: 1,facility: 0},
            {id: 11, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-01-30", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
    {
        added_at: '2020-11-29',
        expenses:[
            {id: 101, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
            {id: 12, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
            {id: 13, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 14, amount: 1, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
            {id: 15, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
            {id: 16, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "2020-11-29", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
]

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

    useEffect(() =>{
        dispatch(fetchBudgets("income"))
        dispatch(fetchBudgets("expense"))
    }, [dispatch])

    let incomeAmount = 0
    let expenseAmount = 0
    tempBudgets.map( budget => budget.incomes.map(income => incomeAmount += income.amount) )
    tempBudgets.map( budget => budget.expenses.map(expense => expenseAmount += expense.amount) )
    
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
        const currentUser = localStorage.getItem("username")
        formData = {...formData, added_by: currentUser}
        if (modalMethod === "edit") {
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
        // window.location.reload()
    }

    const handleDeleteBudget = (budget) =>{
        console.log('Deleting', budget);
        setSelectedBudget(null)
        setModalMethod("idle")
        setShowAddBudgetModal(false);
        setBudgetType('')
    }

    return (
        <div className='table_container'>
            
            {showAddBudgetModal && <>
                <Backdrop />
                <AddBudgetModal handleDeleteBudget={handleDeleteBudget} selectedBudget={selectedBudget} modalMethod={modalMethod} budgetType={budgetType} handleAddBudget={handleAddBudget} handleCloseBudgetModal={handleCloseBudgetModal}/>
            </>}
            <BudgetHeader incomeAmount={incomeAmount} expenseAmount={expenseAmount}/>
            <BudgetTableHeader incomeAmount={incomeAmount} expenseAmount={expenseAmount} handleOpenBudgetModal={handleOpenBudgetModal}/>
            <BudgetContent handleOpenBudgetModal={handleOpenBudgetModal} budgets={tempBudgets}/>
        </div>
    )
}

export default Budget
