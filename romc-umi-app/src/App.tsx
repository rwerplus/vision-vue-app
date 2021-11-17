import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import style from './App.module.css'
import { Provider } from 'mobx-react';
import { stores, StoresContext } from './store';
const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <StoresContext.Provider value={stores}>
        <div className={style.App}>
          <HomePage />
        </div>
      </StoresContext.Provider>
    </Provider>
  );
}
export default App;
