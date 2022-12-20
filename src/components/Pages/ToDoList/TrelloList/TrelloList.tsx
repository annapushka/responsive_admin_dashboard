import React from 'react';
import TrelloCard from '../TrelloCard/TrelloCard';

import './TrelloList.scss';

type Props = {
    title: string;
    cards: [];
};

const TrelloList = ({ title, cards }: Props) => {
    return (
        <div className='trelloList'>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard text={card.text} />
            ))}
        </div>
    );
};

export default TrelloList;