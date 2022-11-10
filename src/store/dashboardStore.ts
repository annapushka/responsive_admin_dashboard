import { makeAutoObservable } from "mobx";

class DashboardStore {

    navigationActive: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    changeNavigationStatus = (status: boolean): boolean => this.navigationActive = status;

}

export default new DashboardStore();