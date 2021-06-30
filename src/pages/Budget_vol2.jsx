import React, { useState } from 'react'
import BudgetContent from '../components/budget/BudgetContent'
import BudgetHeader from '../components/budget/BudgetHeader'
import AddBudgetModal from '../components/budget/addBudget/AddBudgetModal'
import BudgetTableHeader from '../components/budget/BudgetTableHeader'
import Backdrop from '../components/confirmationWindow/Backdrop'
import './pagesStyles/budgetVol_2.css'
import './pagesStyles/addBudget.css'

const budgets = [
    {
        date: '12-10-2020',
        expenses:[
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
        ],
        incomes:[
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"}
        ]
    },
    {
        date: '11-10-2020',
        expenses:[
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
        ],
        incomes:[
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
        ]
    },
    {
        date: '10-10-2020',
        expenses:[
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default expense", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
        ],
        incomes:[
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
            {amount: 0, description: "Default income", is_verified: true, contragent: "Your mom", added_at: "12-10-2020", added_by: "Your Dad"},
        ]
    },
]

function Budget_vol2() {

    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    // income/expense
    const [budgetType, setBudgetType] = useState('')
    
    const handleOpenBudgetModal = (type) =>{
        setShowAddBudgetModal(true);
        setBudgetType(type)
    }
    const handleCloseBudgetModal = () =>{
        setShowAddBudgetModal(false);
        setBudgetType('')
    }

    const handleAddBudget = (formData) =>{
        console.log(`Adding budget with type ${budgetType}...`, formData);
    }
    return (
        <div className='table_container'>
            {showAddBudgetModal && <>
                <Backdrop />
                <AddBudgetModal budgetType={budgetType} handleAddBudget={handleAddBudget} handleCloseBudgetModal={handleCloseBudgetModal}/>
            </>}
            <BudgetHeader />
            <BudgetTableHeader handleOpenBudgetModal={handleOpenBudgetModal}/>
            <BudgetContent budgets={budgets}/>
        </div>
    )
}

export default Budget_vol2
