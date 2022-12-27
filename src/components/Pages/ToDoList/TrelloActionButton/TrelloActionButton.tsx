import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import './TrelloActionButton.scss';
import TrelloForm from '../TrelloForm/TrelloForm';
import { observer } from 'mobx-react-lite';
import listsStore from '../../../../store/listsStore';

const TrelloActionButton = observer((props: any) => {

    const [formOpen, setFormOpen] = useState(false);
    const { list } = props;
    const { addList } = listsStore;

    const closeForm = () => setFormOpen(false);

    const renderAddButton = () => {

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonStyle = list ? "trelloActionButton __list" : " trelloActionButton";

        return (
            <div className={buttonStyle} onClick={() => setFormOpen(true)}>
                <Icon className='trelloActionButton__icon'>add</Icon>
                <p>{buttonText}</p>
            </div>
        );

    }

    return formOpen ? <TrelloForm closeForm={closeForm} addList={addList} list={list} /> : renderAddButton();
});

export default TrelloActionButton;