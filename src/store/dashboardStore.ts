import { makeAutoObservable, runInAction } from "mobx";
import { ICustomer } from "../types/lists";

const url = 'http://localhost:3001';

class DashboardStore {

    navigationActive: boolean = false;
    isLoaded = false;
    customers: ICustomer[] = [];
    error = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = () => {
        fetch(url + '/customers')
            .then((result) => {
                if (result.ok) {
                    return result.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((customers) => {
                runInAction(() => {
                    this.customers = customers;
                    this.isLoaded = true;
                });
            }).catch(error => {
                this.isLoaded = true;
                this.error = error;
            });
    }

    changeNavigationStatus = (status: boolean): boolean => this.navigationActive = status;

}

export default new DashboardStore();