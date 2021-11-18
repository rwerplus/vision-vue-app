import { SOTRE_APP, AppStore } from './app.store';
import { createContext, useContext } from 'react';
import { UserStore, STORE_USER } from './modules/user.store';
import { configure } from 'mobx';

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true
})
/**
 *
 * @returns 所有store实例
 */
function createStores() {
  return {
    [SOTRE_APP]: new AppStore(),
    [STORE_USER]: new UserStore(),
  };
}
/**
 * @type 获取所有的store
 */
export const rootStore = createStores();
export const StoresContext = createContext(rootStore);
/**
 *
 * @returns 将所有store通过cotext注册到上下文
 */
const useStores = () => useContext(StoresContext);
/**
 *
 * @returns 暴露自定义user模块的hooks
 */
export function useUserStore() {
  const { userStore } = useStores();
  return userStore;
}
/**
 *
 * @returns 暴露自定义根app的hooks
 */
export function useAppStore() {
  const { appStore } = useStores();
  return appStore;
}
