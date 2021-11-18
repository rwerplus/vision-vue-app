import { action, makeAutoObservable, observable } from 'mobx';

type STATUS = 'pending' | 'done' | 'error' | 'canceled';

export class AppStore {
  status: STATUS = 'done';
  message: string = "";

  constructor() {
    makeAutoObservable(this, {
      status: observable,
      dispatchStatusAction: action.bound,
      message: observable,

    });
  }
  dispatchStatusAction(payload: STATUS) {
    this.status = payload;
  }
}

export const STORE_APP = 'appStore';
