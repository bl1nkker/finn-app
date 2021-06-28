import React, { useState, useEffect } from 'react'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

function SalaryTotalRow({}) {
    return (
        <div className={`registry_row salary_total`}>
                    <section className='registry_row__item left_align item semimedium'>
                        <span className="item-text bold_text">Итого:</span>
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text"></span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text bold_text">2000</span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text"></span>
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <span className="item-text bold_text">15</span>
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text bold_text">1000</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text bold_text">41610</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text bold_text">11000</span>              
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text bold_text">4368</span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text bold_text"></span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text"></span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text"></span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text"></span>             
                    </section>
                    <section className='registry_row__item item small'>
                        <span className="item-text bold_text">958</span>              
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text"></span>             
                    </section>
                    <section className='registry_row__item item semismall'>
                        <span className="item-text bold_text">40652</span>             
                    </section>
                    <section className='registry_row__item item extra_small'>
                        <button><DescriptionOutlinedIcon className="icon_download"  fontSize="small"/></button>
                    </section>
                </div>
    )
}

export default SalaryTotalRow
