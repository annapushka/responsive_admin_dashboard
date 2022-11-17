import * as React from 'react';

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


export const CustomersBox = () => {
    const customers = [{
        id: 11,
        name: "Leanne Graham",
        country: "Italy",
        image: Customer1
    },
    {
        id: 12,
        name: "Clementine Bauch",
        country: "Sweden",
        image: Customer2
    },
    {
        id: 13,
        name: "Ervin Howell",
        country: "Malaysia",
        image: Customer3
    },
    {
        id: 14,
        name: "Chelsey Dietrich",
        country: "Finland",
        image: Customer4
    },
    {
        id: 15,
        name: "Patricia Lebsack",
        country: "Philippines",
        image: Customer5
    },
    {
        id: 16,
        name: "Dennis Schulist",
        country: "Germany",
        image: Customer6
    },
    {
        id: 17,
        name: "Kurtis Weissnat",
        country: "Russia",
        image: Customer7
    },
    {
        id: 18,
        name: "Clementina DuBuque",
        country: "Bulgaria",
        image: Customer8
    },
    {
        id: 19,
        name: "Nicholas Runolfsdottir",
        country: "USA",
        image: Customer9
    },
    {
        id: 10,
        name: "Glenna Reichert",
        country: "Serbia",
        image: Customer10
    }
    ]

    return (
        <div className="customerBox">
            <table className='customerBox'>
                <tbody> {
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
                }
                </tbody>
            </table>
        </div>
    );
};