import * as React from 'react';
import { biCartFill, biEyeFill, biChatFill, biCurrencyDollar } from "fontawesome-bootstrap-icons";

import { Card } from '../Card/Card';
import './CardBox.scss';
import { useTranslation } from 'react-i18next';


export const CardBox = () => {

    const { t } = useTranslation();

    const cards = [{
        id: 11,
        name: t('pages.dashboard.cards.deilyViwes'),
        number: '1,402',
        icon: biEyeFill
    }, {
        id: 12,
        name: t('pages.dashboard.cards.sales'),
        number: '80',
        icon: biCartFill
    }, {
        id: 13,
        name: t('pages.dashboard.cards.comments'),
        number: '208',
        icon: biChatFill
    }, {
        id: 14,
        name: t('pages.dashboard.cards.earning'),
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