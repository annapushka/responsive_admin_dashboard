import React, { useEffect } from "react";

import './CustomersBox.scss';

import Customer1 from '../../img/customers/customer_1.jpg';
import Customer2 from '../../img/customers/customer_2.jpg';
import Customer3 from '../../img/customers/customer_3.jpg';
import Customer4 from '../../img/customers/customer_4.jpg';
import Customer5 from '../../img/customers/customer_5.jpg';
import Customer6 from '../../img/customers/customer_6.jpg';
import Customer7 from '../../img/customers/customer_7.jpg';
import Customer8 from '../../img/customers/customer_8.jpg';
import Customer9 from '../../img/customers/customer_9.jpg';
import Customer10 from '../../img/customers/customer_10.jpg';
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
                            <td >
                                <div className="customer__img" >
                                    <img src={customer.image} alt={`cusomer ${customer.name}`} />
                                </div>
                            </td>
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