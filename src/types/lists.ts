import dayjs, { Dayjs } from 'dayjs';
export interface ListTypes {
    id: string;
    title: string;
    cards: CardTypes[];
}

export interface CardTypes {
    id: string;
    text: string;
    deadline?: Dayjs;
}