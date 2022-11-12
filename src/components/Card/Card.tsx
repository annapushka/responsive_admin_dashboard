import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Card.scss';

type Props = {
    number: string,
    name: string,
    icon: any,
};
export const Card = ({ number, name, icon }: Props) => {
    return (
        <div className="card">
            <div>
                <div className="card__number">{number}</div>
                <div className="card__name">{name}</div>
            </div>
            <div className="card__iconBox">
                <FontAwesomeIcon icon={icon} className="card__icon" />
            </div>
        </div>
    );
};