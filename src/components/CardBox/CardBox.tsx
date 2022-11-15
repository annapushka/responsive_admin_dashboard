import * as React from 'react';
import { biCartFill, biEyeFill, biChatFill, biCurrencyDollar } from "fontawesome-bootstrap-icons";

import { Card } from '../Card/Card';
import './CardBox.scss';

export const CardBox = () => {
    const cards = [{
        id: 11,
        name: 'Deily Viwes',
        number: '1,402',
        icon: biEyeFill
    }, {
        id: 12,
        name: 'Sales',
        number: '80',
        icon: biCartFill
    }, {
        id: 13,
        name: 'Comments',
        number: '208',
        icon: biChatFill
    }, {
        id: 14,
        name: 'Earning',
        number: '$6,042',
        icon: biCurrencyDollar
    }]

    return (
        <div className="cardBox">
            {
                cards.map(card => (
                    <Card name={card.name} number={card.number} icon={card.icon} key={card.id} />
                ))
            }
        </div>
    );
};