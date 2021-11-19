import React, { useState } from "react";
import HeaderComp from "../Header/Header";
import FooterComp from "../Footer/Footer";
import ContentComp from "../Content/Content";
import style from './HomePage.module.css';
import { Button, Layout as LayoutComp } from "antd";
import Layout from "../Layout/Layout";
import { useAppStore, useUserStore } from '../../store';
import { observer } from "mobx-react";

const HomePage: React.FC = observer(() => {

  const { getUsername, setUsername, dispatchUsernameAction } = useUserStore();

  const {dispatchStatusAction,status} = useAppStore();
  return <div className={style.home}>
    {getUsername}
    <Button onClick={() => setUsername('xxx')} type="primary">Primary Button</Button>
    <HeaderComp />

    {status}
    <Button type="primary" onClick={() => dispatchUsernameAction({ username: "ssss", password: "123456" }, dispatchStatusAction)}>login</Button>


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
