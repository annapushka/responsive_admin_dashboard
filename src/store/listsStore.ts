import { makeAutoObservable } from "mobx";
import { ListTypes } from "../types/lists";


class ListsStore {

    listID = 3;
    cardID = 6;

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
                text: 'Nhfnfhfhsdfs.',
            }
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
        this.cardID++;
        this.lists.map(list => {
            if (`list-${listID}` === list.id) {
                list.cards = [...list.cards, newCard]
            }
        })
    }

    sort = (result: any) => {
        console.log(result)
        const {destination, source} = result;

        // in the same list
        if(source.droppableId === destination.droppableId) {
            const list = this.lists.find(list => source.droppableId === list.id);
            if(list) {
                const listCards = [...list.cards];
                const droppableCard = listCards.splice(source.droppableId, 1);
                listCards.splice(source.index, 0, ...droppableCard);
                list.cards = listCards;
            }
        }

        // other list
        if(source.droppableId !== destination.droppableId) {
            const listStart = this.lists.find(list => source.droppableId === list.id);
            let droppableCard;
            if(listStart) {
                const listCardsFrom = [...listStart.cards];
                droppableCard = listCardsFrom.splice(source.droppableId, 1);
                listStart.cards = listCardsFrom;

            const listEnd = this.lists.find(list => destination.droppableId === list.id);
                if(listEnd) {
                    const listCardsTo = [...listEnd.cards];
                    listCardsTo.splice(destination.index, 0, ...droppableCard)
                    listEnd.cards = listCardsTo;
                }
            }
        }
    }
}

export default new ListsStore();