import React from 'react'
import BudgetDataRow from './BudgetDataRow'

function BudgetContent({ budgets }) {
    const expenses = {
        amount: 0,
        description: "string",
        is_verified: true,
        contragent: "string",
        added_at: "string",
        added_by: 0,
        category: 0,
        facility: 0
      }
    return (
        <>
            {budgets.map(budget => <BudgetDataRow budget={budget}/>)}
        </>
    )
}

export default BudgetContent
