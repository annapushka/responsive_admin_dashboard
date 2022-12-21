export interface ListTypes {
    id?: number;
    title: string;
    cards: CardTypes[];
}

export interface CardTypes {
    id?: number;
    text: string;
}