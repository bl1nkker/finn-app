import React, {useState} from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UnfoldMoreSharpIcon from '@material-ui/icons/UnfoldMoreSharp';
import SaveAltTwoToneIcon from '@material-ui/icons/SaveAltTwoTone';
import { useSelector } from 'react-redux'


function SalaryHeader({ handleShowPopUp }) {
    const [dates, setDates] = useState({ date1:'1 января', date2:'2 января' })
    
    return (
        <div className='table_header'>
            {/* Navigarion + Info */}
            <div className='table_header__nav'>
                <section className='left'>
                    <p  className='title'>Зарплата</p>
                    <div className='buttons_container'>
                        <button className="button">{dates.date1}</button>
                        <button className="button">{dates.date2}</button>
                    </div>
                </section>
                
                <section className='right'>
                    <button className="table_create" onClick={() => handleShowPopUp("create")}><PersonAddIcon className='file_icon'/></button>
                    
                </section>
            </div>

            <hr />

            {/* Filters */}
            <div className='table_header__filters'>
                <section className='table_header__filters item semimedium'>
                    <span className="item-text bold_text">Сотрудник</span>          
                    <UnfoldMoreSharpIcon className="icon_unfold"/>      
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Должность</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                
                <hr />
                <section className='table_header__filters item extra_small'>
                    <span className="item-text bold_text">Часы</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Ставка</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item extra-small'>
                    <span className="item-text bold_text">%</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Доплата</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">ЗП</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Аванс</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">ЗП  безнал</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Мед КН</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Иное</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Бой</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Форма</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item small'>
                    <span className="item-text bold_text">Удерж по сверкам</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Штраф</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
                <section className='table_header__filters item semismall'>
                    <span className="item-text bold_text">Итого</span>
                    <UnfoldMoreSharpIcon className="icon_unfold" fontSize='small'/>                
                </section>
                <hr />
            </div>
        </div>
    )
}

export default SalaryHeader
