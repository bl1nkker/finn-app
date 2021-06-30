import React from 'react'
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function BudgetTableHeader({ handleOpenBudgetModal }) {
    return (
        <section className='budget_table_header'>
            {/* Income */}
            <div className='header_income'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Доход</span>
                        <button onClick={() => handleOpenBudgetModal("income")} className='income_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='income_amount'>43543.00$</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Дата</span>          
                        <UnfoldMoreSharpIcon className="icon_unfold"/>      
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Контрагент</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Сумма</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Описание</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Внес</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Статус</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                </div>
            </div>

            {/* Expense */}
            <div className='header_expense'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Расход</span>
                        <button onClick={() => handleOpenBudgetModal("expense")} className='expense_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='expense_amount'>43543.00$</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Контрагент</span>          
                        <UnfoldMoreSharpIcon className="icon_unfold"/>      
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Сумма</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    
                    <hr />
                    <section className='table_header__filters item underlarge'>
                        <span className="item-text bold_text">Описание</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Внес</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Статус</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                </div>
            </div>
        </section>
    )
}

export default BudgetTableHeader
