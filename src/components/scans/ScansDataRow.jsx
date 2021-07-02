import React, { useState, useEffect } from 'react';
import ScansSubRow from './ScansSubRow';

function ScansDataRow({ scansByDate, handleOpenRevenueModal }) {
    return (
            <div className={`registry_row`}>
            <div className="registry_row__left">
                <section className='registry_row__item item large'>
                    <span className="item-text bold_text">{scansByDate.date}</span>     
                </section>
            </div>
            <div className="registry_row__right">

            {/* Subrows */}
            {scansByDate.scans.map((scan) => <ScansSubRow handleOpenRevenueModal={handleOpenRevenueModal} key={scan.id} scan={scan} /> )}
            </div>
        </div>
    )
}

export default ScansDataRow
