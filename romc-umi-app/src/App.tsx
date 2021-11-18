import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import style from './App.module.css'
import { observer, Provider } from 'mobx-react';
import { rootStore, StoresContext } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LoginPage from './pages/Login/login.page';
import NotFoundPage from './pages/Error/NotFound.page';
const App: React.FC = observer(() => {
  return (
    <Provider {...rootStore}>
      <StoresContext.Provider value={rootStore}>
        <BrowserRouter>
          <div className={style.App}>
            <Routes key="123">
              <Route path="/" element={<Layout />}>
                <Route path="home/*" element={<HomePage/>}/>
              </Route>
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />

            </Routes>
          </div>
        </BrowserRouter>
      </StoresContext.Provider>
    </Provider>
  );
})
export default App;
