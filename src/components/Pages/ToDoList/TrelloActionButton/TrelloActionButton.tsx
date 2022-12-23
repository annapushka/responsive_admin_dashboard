import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import './TrelloActionButton.scss';
import TrelloForm from '../TrelloForm/TrelloForm';

const TrelloActionButton = (props: any) => {

    const [formOpen, setFormOpen] = useState(false);

    const closeForm = () => setFormOpen(false);

    const renderAddButton = () => {

        const { list } = props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonStyle = list ? "trelloActionButton __list" : " trelloActionButton";

        return (
            <div className={buttonStyle} onClick={() => setFormOpen(true)}>
                <Icon className='trelloActionButton__icon'>add</Icon>
                <p>{buttonText}</p>
            </div>
        );

    }

    return formOpen ? <TrelloForm closeForm={closeForm} /> : renderAddButton();
};

export default TrelloActionButton;