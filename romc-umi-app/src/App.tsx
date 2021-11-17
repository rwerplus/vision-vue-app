import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import style from './App.module.css'
import { Provider } from 'mobx-react';
import { store } from './store/user.store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <HomePage />
      </div>
    </Provider>
  );
}
export default App;
