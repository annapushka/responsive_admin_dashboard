import { makeAutoObservable } from "mobx";
import dayjs, { Dayjs } from 'dayjs';
import { ListTypes } from "../types/lists";


class ListsStore {

    listID = 10;
    cardID = 10;

    lists: ListTypes[] = [{
        id: `list-0`,
        title: 'To-do list',
        cards: []
    }, {
        id: `list-1`,
        title: 'In progress',
        cards: []
    }, {
        id: `list-2`,
        title: 'Done',
        cards: []
    }]


    constructor() {
        makeAutoObservable(this);
    }

    addList = (title: string) => {
        if(title.length) {
            this.listID++;
            const newList = {
                id: `list-${this.listID}`,
                title: title,
                cards: []
            }
            this.lists = [...this.lists, newList];
        }
    }

    addCard = (text: string, listID: number) => {
        if(text.length) {
            const newCard = {
                text: text,
                id: `card-${this.cardID}`,
            };
            const list = this.lists.find(list => `${listID}` === list.id);
            if(list) {
                list.cards = [...list.cards, newCard];
            }
            this.lists = [...this.lists];
            this.cardID = this.getCardId();
        }
    }

    getCardId = () => Math.floor(Math.random()*10000);

    duplicateItem = (id: string, type: string, listID: string) => {
        if(type === 'list') {
            this.listID++;
            const list = this.lists.find(list => id === list.id);
    
            if(list) {
                const newList = {
                    id: `list-${this.listID}`,
                    title: list.title,
                    cards: list.cards
                }
                this.lists = [...this.lists, newList];
            }
        }
        if(type === 'card') {
            this.cardID = this.getCardId();
            const list = this.lists.find(list => listID === list.id);
            if(list) {
                const card = list.cards.find(card => id === card.id);
                if(card) {
                    const newCard = {
                        id: `card-${this.cardID}`,
                        text: card.text
                    }
                    list.cards = [...list.cards, newCard];
                }
            } 
        }
        this.lists = [...this.lists];
    }

    archiveItem = (id: string, type: string, listID: string) => {
        if(type === 'list') {
            const list = this.lists.find(list => id === list.id);
            if(list) {
                this.lists.splice(this.lists.indexOf(list), 1);
            }
        }
        if(type === 'card') {
            const list = this.lists.find(list => listID === list.id);
            if(list) {
                const card = list.cards.find(card => id === card.id);
                if(card) {
                    list.cards.splice(list.cards.indexOf(card), 1);
                    list.cards = [...list.cards];
                }
            } 
        }
        this.lists = [...this.lists];
    }

    editItem = (id: string, text: string, type: string, listID: string) => {
        if(type === 'list') {
            const list = this.lists.find(list => id === list.id);
            if(list) {
                list.title = text;
            }
        } 
        if(type === 'card') {
            const list = this.lists.find(list => listID === list.id);
            if(list) {
                const card = list.cards.find(card => id === card.id);
                if(card) {
                    card.text = text; 
                    list.cards = [...list.cards];
                }
            } 
        }
        this.lists = [...this.lists];
    }

    addDeadline = (id: string, listID: string, deadline: Dayjs) => {
            const list = this.lists.find(list => listID === list.id);
            if(list) {
                const card = list.cards.find(card => id === card.id);
                if(card) {
                    card.deadline = deadline; 
                    list.cards = [...list.cards];
                }
            } 
        this.lists = [...this.lists];
    }

    sort = (result: any) => {
        const {destination, source, type} = result;

        //dragging lists around
        if(type === 'list') {
            const list = this.lists.splice(source.index, 1);
            this.lists.splice(destination.index, 0, ...list);
        }
        else  if(type === 'card') {

            // in the same list
            if(source.droppableId === destination.droppableId) {
                const list = this.lists.find(list => source.droppableId === list.id);
                if(list) {
                    const droppableCard = list.cards.splice(source.index, 1);
                    list.cards.splice(destination.index, 0, ...droppableCard);
                }
            }

            // other list
            if(source.droppableId !== destination.droppableId) {
                const listStart = this.lists.find(list => source.droppableId === list.id);
                let droppableCard;
                if(listStart) {
                    droppableCard = listStart.cards.splice(source.index, 1);
                }
                const listEnd = this.lists.find(list => destination.droppableId === list.id);
                if(listEnd && droppableCard) {
                    listEnd.cards.splice(destination.index, 0, ...droppableCard);
                }
            }
        }
    }
}

export default new ListsStore();