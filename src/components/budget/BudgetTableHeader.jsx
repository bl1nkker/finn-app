import React from 'react'
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function BudgetTableHeader({ ordering, setOrdering, handleOpenBudgetModal, expenseAmount, incomeAmount }) {
    const handleOnClick = (positive, negative) =>{
        setOrdering(ordering === positive ? negative : positive)
    }
    console.log(ordering)
    return (
        <section className='budget_table_header'>
            {/* Income */}
            <div className='header_income'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Доход</span>
                        <button onClick={() => handleOpenBudgetModal("income", 'create', {})} className='income_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='income_amount'>{incomeAmount?.toFixed(2)} ₽</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Дата</span>          
                        <button name="added_at" onClick={(event) => handleOnClick("added_at", '-added_at')}><UnfoldMoreSharpIcon className="icon_unfold"/></button>
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Контрагент</span>
                        <button name="contragent" onClick={(event) => handleOnClick("contragent", '-contragent')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>               
                    </section>
                    
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Сумма</span>
                        <button name="amount" onClick={(event) => handleOnClick("amount", '-amount')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                  
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Описание</span>
                        <button name="description" onClick={(event) => handleOnClick("description", '-description')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Внес</span>
                        {/* <button name="added_at" onClick={(event) => handleOnClick("added_at", '-added_at')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                 */}
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        {/* This is neccessary */}
                        {/* <input type='checkbox' /> */}
                        <span className="item-text bold_text">Статус</span>
                        <button name="is_verified" onClick={(event) => handleOnClick("is_verified", '-is_verified')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                
                    </section>
                </div>
            </div>

            {/* Expense */}
            <div className='header_expense'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Расход</span>
                        <button onClick={() => handleOpenBudgetModal("expense", 'create', {})} className='expense_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='expense_amount'>{expenseAmount?.toFixed(2)} ₽</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Контрагент</span>          
                        <button name="contragent" onClick={(event) => handleOnClick("contragent", '-contragent')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                              </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Сумма</span>
                        <button name="amount" onClick={(event) => handleOnClick("amount", '-amount')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                      
                    </section>
                    
                    <hr />
                    <section className='table_header__filters item semimedium'>
                        <span className="item-text bold_text">Описание</span>
                        <button name="description" onClick={(event) => handleOnClick("description", '-description')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                      
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        <span className="item-text bold_text">Внес</span>
                        {/* <button name="added_at" onClick={(event) => handleOnClick("added_at", '-added_at')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>                       */}
                    </section>
                    <hr />
                    <section className='table_header__filters item small'>
                        {/* <input type='checkbox' /> */}
                        <span className="item-text bold_text">Статус</span>
                        <button name="is_verified" onClick={(event) => handleOnClick("is_verified", '-is_verified')} ><UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/> </button>  
                        </section>
                </div>
            </div>
        </section>
    )
}

export default BudgetTableHeader
