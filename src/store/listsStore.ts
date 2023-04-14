import { makeAutoObservable, runInAction } from "mobx";
import dayjs, { Dayjs } from 'dayjs';
import { IList } from "../types/lists";

const url = 'http://localhost:3001';

class ListsStore {

    listID = 1;
    cardID = 1;
    isLoaded = false;
    lists: IList[] = [];
    error = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = () => {
        fetch(url + '/lists')
            .then((result) => {
                if (result.ok) {
                    return result.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((lists) => {
                runInAction(() => {
                    this.lists = lists;
                    this.isLoaded = true;
                });
            }).catch(error => {
                this.isLoaded = true;
                this.error = error;
            });
    }
    
    post = (newList: IList) => {
        fetch(url + '/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newList)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(() => this.loadData())
        .catch(error => {
            this.error = error;
        });
    }

    delete = (listID: string) => {
        fetch(url + `/lists/${listID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(() => this.loadData())
            .catch(error => {
                this.isLoaded = true;
                this.error = error;
            });
    }

    put = (list: IList, listID: string) => {
        fetch(url + `/lists/${listID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(list)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(() => this.loadData())
            .catch(error => {
                this.error = error;
            });
    }

    addList = (title: string) => {
        if (title.length) {
            this.listID++;
            const newList = {
                id: `list-${this.listID}`,
                title: title,
                cards: []
            }
            this.post(newList)
        }
    }

    addCard = (text: string, listID: string) => {
        if (text.length) {
            const newCard = {
                text: text,
                id: `card-${this.cardID}`,
            };
            const list = this.lists.find(list => `${listID}` === list.id);
            if (list) {
                list.cards = [...list.cards, newCard];
                this.put(list, listID)
            }
            this.cardID = this.getCardId();
        }
    }

    getCardId = () => Math.floor(Math.random() * 10000);

    duplicateItem = (id: string, type: string, listID: string) => {
        if (type === 'list') {
            this.listID++;
            const list = this.lists.find(list => id === list.id);

            if (list) {
                const newList = {
                    id: `list-${this.listID}`,
                    title: list.title,
                    cards: list.cards
                }
                this.post(newList)
            }
        }
        if (type === 'card') {
            this.cardID = this.getCardId();
            const list = this.lists.find(list => listID === list.id);
            if (list) {
                const card = list.cards.find(card => id === card.id);
                if (card) {
                    const newCard = {
                        id: `card-${this.cardID}`,
                        text: card.text
                    }
                    list.cards = [...list.cards, newCard];
                }
                this.put(list, listID)
            }
        }
    }

    archiveItem = (id: string, type: string, listID: string) => {
        if (type === 'list') {
            this.delete(listID)
        }
        if (type === 'card') {
            const list = this.lists.find(list => listID === list.id);
            if (list) {
                const card = list.cards.find(card => id === card.id);
                if (card) {
                    list.cards.splice(list.cards.indexOf(card), 1);
                    list.cards = [...list.cards];
                }
                this.put(list, listID)
            }
        }
    }

    editItem = (id: string, text: string, type: string, listID: string) => {
        if (type === 'list') {
            const list = this.lists.find(list => id === list.id);
            if (list) {
                list.title = text;
                this.put(list, listID)
            }
        }
        if (type === 'card') {
            const list = this.lists.find(list => listID === list.id);
            if (list) {
                const card = list.cards.find(card => id === card.id);
                if (card) {
                    card.text = text;
                    list.cards = [...list.cards];
                }
                this.put(list, listID)
            }
        }
    }

    addDeadline = (id: string, listID: string, deadline: Dayjs) => {
        const list = this.lists.find(list => listID === list.id);
        if (list) {
            const card = list.cards.find(card => id === card.id);
            if (card) {
                card.deadline = deadline;
                list.cards = [...list.cards];
                this.put(list, listID)
            }
        }
    }

    sort = (result: any) => {
        const { destination, source, type } = result;

        //dragging lists around
        if (type === 'list') {
            const list = this.lists.splice(source.index, 1);
            this.lists.splice(destination.index, 0, ...list);
        } else if (type === 'card') {

            // in the same list
            if (source.droppableId === destination.droppableId) {
                const list = this.lists.find(list => source.droppableId === list.id);
                if (list) {
                    const droppableCard = list.cards.splice(source.index, 1);
                    list.cards.splice(destination.index, 0, ...droppableCard);
                }
            }

            // other list
            if (source.droppableId !== destination.droppableId) {
                const listStart = this.lists.find(list => source.droppableId === list.id);
                let droppableCard;
                if (listStart) {
                    droppableCard = listStart.cards.splice(source.index, 1);
                }
                const listEnd = this.lists.find(list => destination.droppableId === list.id);
                if (listEnd && droppableCard) {
                    listEnd.cards.splice(destination.index, 0, ...droppableCard);
                }
            }

            this.lists.forEach(list => {
                fetch(url + `/lists/${list.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(list)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Something went wrong ...');
                        }
                    })
                    .catch(error => {
                        this.error = error;
                    });
            })
            this.loadData()
        }
    }
}

export default new ListsStore();