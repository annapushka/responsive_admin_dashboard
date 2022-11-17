import * as React from 'react';

import './Table.scss';

type Props = {

};

export const Table = (props: Props) => {
    return (
        <table className='table-details'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                </tr>
                <tr>
                    <td>Window Coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className='status pending'>Pending</span></td>
                </tr>
                <tr>
                    <td>Speakers</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td><span className='status return'>Return</span></td>
                </tr>
                <tr>
                    <td>Hp Laptop</td>
                    <td>$6000</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>In Progress</span></td>
                </tr>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                </tr>
                <tr>
                    <td>Window Coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className='status delivered'>Pending</span></td>
                </tr>
                <tr>
                    <td>Speakers</td>
                    <td>$620</td>
                    <td>Paid</td>
                    <td><span className='status return'>Return</span></td>
                </tr>
                <tr>
                    <td>Hp Laptop</td>
                    <td>$6000</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>In Progress</span></td>
                </tr>
            </tbody>
        </table>
    );
};