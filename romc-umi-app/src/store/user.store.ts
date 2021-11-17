import { observable, action, computed } from 'mobx';

export class Store {
  @observable username: null | string = null;

  @action
  setUsername = (username: string) => {
    this.username = username;
  };
}
export const store = new Store();
console.log('sore', store);
