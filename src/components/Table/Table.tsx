import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './Table.scss';


export const Table = () => {
    const { t } = useTranslation();

    return (
        <table className='table-details'>
            <thead>
                <tr>
                    <td>{t('pages.dashboard.details.tableCol.name')}</td>
                    <td>{t('pages.dashboard.details.tableCol.price')}</td>
                    <td>{t('pages.dashboard.details.tableCol.payment')}</td>
                    <td>{t('pages.dashboard.details.tableCol.status')}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>{t('pages.dashboard.details.status.delivered')}</span></td>
                </tr>
                <tr>
                    <td>Window Coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className='status pending'>{t('pages.dashboard.details.status.pending')}</span></td>
                </tr>
                <tr>
                    <td>Speakers</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td><span className='status return'>{t('pages.dashboard.details.status.return')}</span></td>
                </tr>
                <tr>
                    <td>Hp Laptop</td>
                    <td>$6000</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>{t('pages.dashboard.details.status.inProgress')}</span></td>
                </tr>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>{t('pages.dashboard.details.status.delivered')}</span></td>
                </tr>
                <tr>
                    <td>Window Coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className='status delivered'>{t('pages.dashboard.details.status.pending')}</span></td>
                </tr>
                <tr>
                    <td>Speakers</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td><span className='status return'>{t('pages.dashboard.details.status.return')}</span></td>
                </tr>
                <tr>
                    <td>Hp Laptop</td>
                    <td>$6000</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>{t('pages.dashboard.details.status.inProgress')}</span></td>
                </tr>
            </tbody>
        </table>
    );
};