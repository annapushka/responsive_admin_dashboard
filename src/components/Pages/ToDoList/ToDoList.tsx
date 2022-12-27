// @flow 
import * as React from 'react';
import TrelloList from './TrelloList/TrelloList';
import { observer } from "mobx-react";
import listsStore from '../../../store/listsStore';

import './ToDoList.scss';
import TrelloActionButton from './TrelloActionButton/TrelloActionButton';

export const ToDoList = observer(() => {
    const { lists } = listsStore;

    return (
        <div className='toDoList'>
            {lists.map(list => (
                <TrelloList title={list.title} cards={list.cards} key={list.id} />
            ))}
            <TrelloActionButton list />
        </div>
    );
});