import React from 'react';

import './TrelloCard.scss';

type Props = {
    text: string;
};

const TrelloCard = ({ text }: Props) => {
    return (
        <div className='trelloCard'>
            <p>{text}</p>
        </div>
    );
};

export default TrelloCard;