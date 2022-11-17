import * as React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '../Table/Table';
import { CustomersBox } from '../CustomersBox/CustomersBox'

import './Details.scss';

type Props = {

};
export const Details = (props: Props) => {
    return (
        <div className='details'>
            <div className="recentOrders">
                <div className="recentOrders__header header">
                    <h2>Recent Orders</h2>
                    <Link to='/' className='recentOrders__btn btn'>View All</Link>
                </div>
                <Table />
            </div>
            <div className="recentCustomers">
                <div className="recentCustomers__header header">
                    <h2>Recent Customers</h2>
                </div>
                <CustomersBox />
            </div>
        </div>
    );
};