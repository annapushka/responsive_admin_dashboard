import dayjs, { Dayjs } from 'dayjs';
export interface IList {
    id: string;
    title: string;
    cards: ICard[];
}

export interface ICard {
    id: string;
    text: string;
    deadline?: Dayjs;
}

export interface ICustomer {
    id: number | string;
    name: string;
    country: string;
    image: string;
}