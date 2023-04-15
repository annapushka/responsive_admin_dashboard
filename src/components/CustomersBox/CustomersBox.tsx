import React, { useEffect } from "react";

import './CustomersBox.scss';

import dashboardStore from '../../store/dashboardStore';


export const CustomersBox = () => {
    const { customers, loadData } = dashboardStore;

    useEffect(() => {
        loadData()
    })

    return (
        <div className="customerBox">
            <table className='customerBox'>
                <tbody>{
                    customers.map(customer => (
                        <tr key={customer.id} className='customer'>
                            <td>
                                <h4 className="customer__info">{customer.name}<br /><span>{customer.country}</span></h4>
                            </td>
                        </tr>
                    ))
                }</tbody>
            </table>
        </div>
    );
};