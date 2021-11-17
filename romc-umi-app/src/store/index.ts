import { createContext, useContext } from 'react';
import { UserStore, STORE_USER } from './user.store';
function createStores() {
  return {
    [STORE_USER]: new UserStore(),
  };
}
const stores = createStores();
const StoresContext = createContext(stores);
const useStores = () => useContext(StoresContext);

function useUserStore() {
  const { userStore } = useStores();
  return userStore;
}

export {
  useUserStore,
  StoresContext,
  stores
}