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
        this.cardID = this.getCardId();
        this.lists.map(list => {
            if (`${listID}` === list.id) {
                list.cards = [...list.cards, newCard]
            }
        })
    }

    getCardId = () => Math.random();

    sort = (result: any) => {
        console.log(result)
        const {destination, source} = result;

        // in the same list
        if(source.droppableId === destination.droppableId) {
            const list = this.lists.find(list => source.droppableId === list.id);
            if(list) {
                const listCards = [...list.cards];
                const droppableCard = listCards.splice(source.index, 1);
                listCards.splice(destination.index, 0, ...droppableCard);
                list.cards = listCards;
            }
        }

        // other list
        if(source.droppableId !== destination.droppableId) {
            const listStart = this.lists.find(list => source.droppableId === list.id);
            let droppableCard;
            if(listStart) {
                const listCardsStart = [...listStart.cards];
                droppableCard = listCardsStart.splice(source.index, 1);
                listStart.cards = listCardsStart;
            }
            const listEnd = this.lists.find(list => destination.droppableId === list.id);
            if(listEnd && droppableCard) {
                const listCardsEnd = [...listEnd.cards];
                listCardsEnd.splice(destination.index, 0, ...droppableCard);
                listEnd.cards = listCardsEnd;
            }
        }
    }
}

export default new ListsStore();