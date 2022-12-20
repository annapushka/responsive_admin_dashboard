// @flow 
import * as React from 'react';
import TrelloList from './TrelloList/TrelloList';
import listsStore from '../../../store/listsStore';
import { observer } from "mobx-react";

export const ToDoList = observer(() => {
    const { lists, cards } = listsStore;

    return (
        <div className='toDoList'>
            {lists.map(list => (
                <TrelloList title={list.title} cards={cards} />
            ))}
        </div>
    );
});