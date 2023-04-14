import * as React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '../Table/Table';
import { CustomersBox } from '../CustomersBox/CustomersBox'

import './Details.scss';
import { useTranslation } from 'react-i18next';

export const Details = () => {
    const { t } = useTranslation();

    return (
        <div className='details'>
            <div className="recentOrders">
                <div className="recentOrders__header header">
                    <h2>{t('pages.dashboard.details.recentOrders')}</h2>
                    <Link to='/' className='recentOrders__btn btn'>{t('pages.dashboard.details.status.viewAll')}</Link>
                </div>
                <Table />
            </div>
            <div className="recentCustomers">
                <div className="recentCustomers__header header">
                    <h2>{t('pages.dashboard.details.recentCustomers')}</h2>
                </div>
                <CustomersBox />
            </div>
        </div>
    );
};