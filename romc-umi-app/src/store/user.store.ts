import { observable, action, computed } from 'mobx';

export class UserStore {
  @observable username: null | string = 'null';

  @action
  setUsername = (username: string) => {
    this.username = username;
  };
}
export const store = new UserStore();

export const STORE_USER = 'userStore'