import React from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
function CoworkersDataRow({coworker, handleOpenCoworkerModal}) {
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
                        <span className="item-text">{coworker.subdivision}</span>
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
