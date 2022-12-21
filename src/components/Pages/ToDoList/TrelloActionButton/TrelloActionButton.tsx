import React from 'react';
import Icon from '@mui/material/Icon';
import './TrelloActionButton.scss';

const TrelloActionButton = (props: any) => {

    const renderAddButton = () => {

        const { list } = props;

        const buttonText = list ? "Add another list" : "Add another card";

        return (
            <div className='trelloActionButton'>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );

    }

    return renderAddButton();
};

export default TrelloActionButton;