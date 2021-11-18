import { login } from '../../api/user.api';
import { runInAction, makeObservable } from 'mobx';
import { useAppStore, useUserStore } from '..';

export interface UserInfo {
  username: string;
  password: string;
  verificationCode?: string;
}
export class UserStore {
  username: null | string = 'null';

  constructor() {
    makeObservable(this, {}, { autoBind: true });
  }

  get getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
    console.log(this.username);
  }

  resetUsername() {
    console.log(this);
    this.username = 'resetUsername';
  }

  updateUsernameAction(payload: string) {
    this.setUsername(payload);
  }
}

export const store = new UserStore();

export const STORE_USER = 'userStore';

export const useDerivationLoginAction = async (payload: UserInfo) => {
  const { updateUsernameAction } = useUserStore();
  updateUsernameAction('');
  const { derivationStatusAction } = useAppStore();
  derivationStatusAction('pending');
  try {
    const response: any = await login(payload);
    if (response.status === 200) {
      runInAction(() => {
        updateUsernameAction(response.username);
        derivationStatusAction('done');
      });
    } else {
    }
  } catch (e) {
    runInAction(() => {
      derivationStatusAction('error');
    });
  }
};
