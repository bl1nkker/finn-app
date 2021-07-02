import React, { useState, useEffect } from 'react';
import RevenueSubRow from './RevenueSubRow';

function RevenueDataRow({ revenuesByDate, handleOpenRevenueModal }) {
    return (
            <div className={`registry_row`}>
            <div className="registry_row__left">
                <section className='registry_row__item item small'>
                    <span className="item-text bold_text">{revenuesByDate.date}</span>     
                </section>
            </div>
            <div className="registry_row__right">

            {/* Subrows */}
            {revenuesByDate.revenues.map(revenue => <RevenueSubRow handleOpenRevenueModal={handleOpenRevenueModal} key={revenue.id} revenue={revenue} /> )}
            </div>
        </div>
    )
}

export default RevenueDataRow
