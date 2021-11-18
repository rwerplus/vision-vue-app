import React, { useState } from "react";
import HeaderComp from "../Header/Header";
import FooterComp from "../Footer/Footer";
import ContentComp from "../Content/Content";
import style from './HomePage.module.css';
import { Button, Layout as LayoutComp } from "antd";
import Layout from "../Layout/Layout";
import { useAppStore, useUserStore } from '../../store';
import { observer } from "mobx-react";
import { useDerivationLoginAction } from '../../store/modules/user.store';
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = observer(() => {

  const { getUsername, setUsername, resetUsername } = useUserStore();

  const appStore = useAppStore();
  return <div className={style.home}>
    {getUsername}
    <Button onClick={() => setUsername('xxx')} type="primary">Primary Button</Button>
    <Button onClick={() => resetUsername()} type="primary">test arrow function</Button>
    <HeaderComp />

    {appStore.status}
    <Button onClick={() => appStore.derivationStatusAction("error")} type="primary">test arrow function</Button>
    <Button onClick={() => useDerivationLoginAction({username: "ssss",password: "123456"})} type="primary">login</Button>
    

    {/* <Content className={style.layout}>
      <Layout/>
    </Content>
    <Content>
      <ContentComp/>
    </Content>
    <Footer>
      <FooterComp/>
    </Footer> */}
  </div>;
});
export default HomePage;
