import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import style from './App.module.css'
const App: React.FC = () => {
  return (
      <div className={style.App}>
        <HomePage/>
      </div>
  );
}
export default App;
