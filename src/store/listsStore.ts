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
}

export default new ListsStore();