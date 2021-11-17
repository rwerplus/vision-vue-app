import React from "react";
import HeaderComp from "../Header/Header";
import FooterComp from "../Footer/Footer";
import ContentComp from "../Content/Content";
import style from './HomePage.module.css'
import { Button, Layout as LayoutComp } from "antd";
import Layout from "../Layout/Layout";
import { useUserStore } from '../../store';
const HomePage: React.FC = () => {

  const { Footer, Content } = LayoutComp;

  const { username, setUsername } = useUserStore();
  return <div className={style.home}>
    {username}
    <Button onClick={() => setUsername('xxx')} type="primary">Primary Button</Button>
    <HeaderComp />
    <Content className={style.layout}>
      <Layout />
    </Content>
    <Content>
      <ContentComp />
    </Content>
    <Footer>
      <FooterComp />
    </Footer>
  </div>
}
export default HomePage;
