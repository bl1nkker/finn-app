import React from 'react'
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function SettingsTableHeader({ accounts, companies, handleOpenAccountModal, handleOpenCompanyModal }) {
    return (
        <section className='budget_table_header'>
            {/* Income */}
            <div className='header_income'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Аккаунты</span>
                        <button onClick={() => handleOpenAccountModal('create', {})} className='income_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='income_amount'>{accounts.length}</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item oversmall'>
                        <span className="item-text bold_text">ФИО</span>          
                        <UnfoldMoreSharpIcon className="icon_unfold"/>      
                    </section>
                    <hr />
                    <section className='table_header__filters item medium'>
                        <span className="item-text bold_text">Номер телефона</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    
                    <hr />
                    <section className='table_header__filters item oversmall'>
                        <span className="item-text bold_text">Почта</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                    <hr />
                    <section className='table_header__filters item oversmall'>
                        <span className="item-text bold_text">Статус</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                </div>
            </div>

            {/* Expense */}
            <div className='header_expense'>
                <div className='top'>
                    <div className='left'>
                        <span className='header_title'>Предприятия</span>
                        <button onClick={() => handleOpenCompanyModal('create', {})} className='expense_add'><AddCircleOutlineIcon className='icon_add' fontSize='small'/></button>
                    </div>
                    <div className='right'>
                        <span className='expense_amount'>{companies.length}</span>
                    </div>
                </div>
                <hr />
                <div className='table_header__filters'>
                    <section className='table_header__filters item large'>
                        <span className="item-text bold_text">Название</span>          
                        <UnfoldMoreSharpIcon className="icon_unfold"/>      
                    </section>
                    <hr />
                    <section className='table_header__filters item oversmall'>
                        <span className="item-text bold_text">Статус</span>
                        <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                    </section>
                </div>
            </div>
        </section>
    )
}

export default SettingsTableHeader
