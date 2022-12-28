import React from 'react';
import { CardTypes } from '../../../../types/lists';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';
import TrelloCard from '../TrelloCard/TrelloCard';

import './TrelloList.scss';

type Props = {
    title: string;
    cards: CardTypes[];
    id?: number;
};

const TrelloList = ({ title, cards, id }: Props) => {
    return (
        <div className='trelloList'>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard text={card.text} key={card.id} />
            ))}
            <TrelloActionButton listID={id} />
        </div>
    );
};

export default TrelloList;