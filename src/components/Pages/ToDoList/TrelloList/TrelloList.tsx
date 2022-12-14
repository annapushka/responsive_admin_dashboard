import React from 'react';
import TrelloCard from '../TrelloCard/TrelloCard';

import './TrelloList.scss';

type Props = {
    title: string;
};

const TrelloList = ({ title }: Props) => {
    return (
        <div className='trelloList'>
            <h4>{title}</h4>
            <TrelloCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.' />
            <TrelloCard text='Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.' />
        </div>
    );
};

export default TrelloList;