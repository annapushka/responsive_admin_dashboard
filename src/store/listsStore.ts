import { makeAutoObservable } from "mobx";
import { ListTypes } from "../types/lists";


class ListsStore {

    listID = 3;
    cardID = 100;

    lists: ListTypes[] = [{
        id: `list-${0}`,
        title: 'In progress',
        cards: [
            {
                id: `card-${0}`,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: `card-${1}`,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }
        ]
    }, {
        id: `list-${1}`,
        title: 'Test',
        cards: [
            {
                id: `card-${2}`,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: `card-${3}`,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }
        ]
    }, {
        id: `list-${2}`,
        title: 'Done',
        cards: [
            {
                id: `card-${4}`,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur, ligula condimentum suscipit rhoncus, neque lacus vestibulum libero, in sagittis orci leo eget nunc. Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: `card-${5}`,
                text: 'Praesent id faucibus ex. Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }, {
                id: `card-${6}`,
                text: 'Vivamus consectetur, ligula condimentum suscipit rhoncus...'
            }, {
                id: `card-${7}`,
                text: 'Aenean elementum porta metus, sed aliquet ligula dictum in. Proin fermentum vitae velit eget fringilla. Ut in ligula commodo, elementum lectus quis, imperdiet lectus. Sed quis ipsum eget augue lobortis porttitor.',
            }, {
                id: `card-${8}`,
                text: 'Etiam gravida nisl nec orci imperdiet, a pulvinar lectus faucibus.',
            }, {
                id: `card-${9}`,
                text: 'Sed quis ipsum eget augue lobortis porttitor.',
            },
        ]
    }]


    constructor() {
        makeAutoObservable(this);
    }

    addList = (title: string) => {
        this.listID++;
        const newList = {
            id: `list-${this.listID}`,
            title: title,
            cards: []
        }
        this.lists.push(newList);
    }

    addCard = (text: string, listID: number) => {
        const newCard = {
            text: text,
            id: `card-${this.cardID}`,
        };
        this.lists.map(list => {
            if (`${listID}` === list.id) {
                list.cards = [...list.cards, newCard]
            }
        })
        console.log(this.lists)
        this.cardID = this.getCardId();
    }

    getCardId = () => Math.floor(Math.random()*10000);

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