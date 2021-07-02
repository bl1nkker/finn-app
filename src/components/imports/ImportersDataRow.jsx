import React, { useState, useEffect } from 'react'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
function ImportersDataRow({importer, handleOpenImporterModal}) {
    return (
        <div className={`registry_row`}>
                    <section className='registry_row__item item semilarge'>
                        <span className="item-text">{importer.company_name}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item semilarge'>
                        <span className="item-text">{importer.production_type}</span>
                    </section>
                    <hr />
                    <section className='registry_row__item item big'>
                        <span className="item-text">{importer.comment}</span>
                    </section>
                    <hr />
                    <section className='registry_row__right item small'>
                        <button onClick={() => handleOpenImporterModal("edit", importer)}><EditOutlinedIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default ImportersDataRow
