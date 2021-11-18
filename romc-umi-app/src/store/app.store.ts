import { action, makeAutoObservable, observable } from 'mobx';

type STATUS = 'pending' | 'done' | 'error' | 'canceled';

export class AppStore {
  status: STATUS = 'done';
  message: string = "";

  constructor() {
    makeAutoObservable(this, {
      status: observable,
      derivationStatusAction: action.bound,
      message: observable,

    });
  }
  derivationStatusAction(payload: STATUS) {
    this.status = payload;
  }
}

export const SOTRE_APP = 'appStore';
