import { login } from '@/api/user.api';
import { runInAction, makeAutoObservable, action, computed} from 'mobx';

export interface UserInfo {
  username: string;
  password: string;
  verificationCode?: string;
}
export class UserStore {
  username: null | string = 'null';

  constructor() {
    makeAutoObservable(this, {
      dispatchUsernameAction: action.bound,
      setUsername: action.bound,
      getUsername: computed,
    });
  }

  get getUsername() {
    return this.username;
  }

  setUsername = (username: string) => {
    this.username = username;
    console.log(this.username);
  };

  /**
   *
   *
   * @param {UserInfo} payload 传入的用户信息
   * @param {Function} [cb] app中修改status的action
   * @member UserStore
   */
  async dispatchUsernameAction(payload: UserInfo, cb?: Function) {
    cb && cb('pending');
    try {
      const response: any = await login(payload);
      console.log(response);

      if (response.status === 200) {
        runInAction(() => {
          this.setUsername(response.username);
          cb && cb('done');
        });
      } else {
      }
    } catch (e) {
      runInAction(() => {
        cb && cb('error');
      });
    }
  }
}

export const STORE_USER = 'userStore';
