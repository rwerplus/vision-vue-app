import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import style from './App.module.css'
import { observer, Provider } from 'mobx-react';
import { rootStore, StoresContext } from './store';
const App: React.FC = observer( () => {
  return (
    <Provider {...rootStore}>
      <StoresContext.Provider value={rootStore}>
        <div className={style.App}>
          <HomePage />
        </div>
      </StoresContext.Provider>
    </Provider>
  );
})
export default App;
