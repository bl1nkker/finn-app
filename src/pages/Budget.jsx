import React, { useState } from 'react'
import BudgetContent from '../components/budget/BudgetContent'
import BudgetHeader from '../components/budget/BudgetHeader'
import AddBudgetModal from '../components/budget/addBudget/AddBudgetModal'
import BudgetTableHeader from '../components/budget/BudgetTableHeader'
import Backdrop from '../components/confirmationWindow/Backdrop'
import './pagesStyles/budget.css'
import './pagesStyles/addBudget.css'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { createBudget, updateBudget } from './../redux/actions/budgetActions'
import TableCalendar from '../components/tableCalendar/TableCalendar'

const tempBudgets = [
    {
        date: '2020-10-10',
        expenses:[
            {id: 1, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 2, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 3, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 4, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 5, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 6, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 7, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 8, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
    {
        date: '2020-01-30',
        expenses:[
            {id: 9, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 10, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 11, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
    {
        date: '2020-11-29',
        expenses:[
            {id: 101, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 12, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 13, amount: 0, description: "Default expense", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ],
        incomes:[
            {id: 14, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 15, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
            {id: 16, amount: 0, description: "Default income", is_verified: true, contragent: "Contragent name", added_at: "12-10-2020", added_by: "Washington DC",category: 1,facility: 0},
        ]
  
    },
]

function Budget() {
    const dispatch = useDispatch()
    // When API will be ready, connect this to all components
    const budgets = useSelector(state => state.budgets.data)
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    // income/expense
    const [budgetType, setBudgetType] = useState('')
    // create/edit/idle
    const [modalMethod, setModalMethod] = useState('idle')
    const [selectedBudget, setSelectedBudget] = useState(null)
    
    
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
    }

    

    return (
        <div className='table_container'>
            
            {showAddBudgetModal && <>
                <Backdrop />
                <AddBudgetModal selectedBudget={selectedBudget} modalMethod={modalMethod} budgetType={budgetType} handleAddBudget={handleAddBudget} handleCloseBudgetModal={handleCloseBudgetModal}/>
            </>}
            <BudgetHeader />
            <BudgetTableHeader handleOpenBudgetModal={handleOpenBudgetModal}/>
            <BudgetContent handleOpenBudgetModal={handleOpenBudgetModal} budgets={tempBudgets}/>
        </div>
    )
}

export default Budget
