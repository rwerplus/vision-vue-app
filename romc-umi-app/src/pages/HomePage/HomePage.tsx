import React from "react";
import HeaderComp from "../Header/Header";
import FooterComp from "../Footer/Footer";
import ContentComp from "../Content/Content";
import style from './HomePage.module.css'
import { Layout as LayoutComp } from "antd";
import Layout from "../Layout/Layout";
import { useLocalObservable, Observer } from 'mobx-react-lite';
import { store } from '../../store/user.store';
const HomePage: React.FC = () => {

  const { Footer, Content } = LayoutComp;

  const userStore = useLocalObservable(() => store);

  return <div className={style.home}>
    <HeaderComp />
    <Content className={style.layout}>
      <Layout />
      <Observer>
        {() => <div onClick={userStore.setUsername('xxx')!}>{userStore.username}</div>
        }
      </Observer>
      {store.username}
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
