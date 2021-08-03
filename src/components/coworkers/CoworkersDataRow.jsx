import React from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
function CoworkersDataRow({coworker, handleOpenCoworkerModal}) {
    const subdivisionOpt = [
        {id:'1', name:'Администрация'},
        {id:'2', name:'Бар'},
        {id:'3', name:'Официанты'},
        {id:'4', name:'Кухня'},
        {id:'5', name:'Технический Персонал'},
    ]
    return (
        <div className={`registry_row`}>
                    <section className='registry_row__item item semilarge'>
                        <span className="item-text">{coworker.full_name}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item large'>
                        <span className="item-text">{coworker.phone_number}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item semilarge'>
                        <span className="item-text">{subdivisionOpt.find(sbd => sbd.id === coworker.subdivision).name}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item semilarge'>
                        <span className="item-text">{coworker.is_active ? "Действующий" : "Уволен"}</span>
                    </section>
                    <hr />
                    <section className='registry_row__right item small'>
                        <button onClick={() => handleOpenCoworkerModal("edit", coworker)}><EditOutlinedIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default CoworkersDataRow
