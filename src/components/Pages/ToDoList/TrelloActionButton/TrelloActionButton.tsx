import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import './TrelloActionButton.scss';
import TrelloForm from '../TrelloForm/TrelloForm';
import { observer } from 'mobx-react-lite';
import listsStore from '../../../../store/listsStore';
import { useTranslation } from 'react-i18next';

const TrelloActionButton = observer((props: any) => {

    const [formOpen, setFormOpen] = useState(false);
    const { list, listID } = props;
    const { addList, addCard } = listsStore;

    const { t } = useTranslation();

    const closeForm = () => setFormOpen(false);

    const renderAddButton = () => {

        const buttonText = list ? t('pages.toDoList.addList') : t('pages.toDoList.addCard');
        const buttonStyle = list ? "trelloActionButton __list" : " trelloActionButton";

        return (
            <div className={buttonStyle} onClick={() => setFormOpen(true)}>
                <Icon className='trelloActionButton__icon'>add</Icon>
                <p>{buttonText}</p>
            </div>
        );

    }

    return formOpen ? <TrelloForm closeForm={closeForm} addList={addList} addCard={addCard} list={list} listID={listID} /> : renderAddButton();
});

export default TrelloActionButton;