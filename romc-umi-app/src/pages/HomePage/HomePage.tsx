import React from "react";
import HeaderComp from "../Header/Header";
import FooterComp from "../Footer/Footer";
import ContentComp from "../Content/Content";
import style from './HomePage.module.css'
import {Layout  as LayoutComp } from "antd";
import Layout from "../Layout/Layout";
const HomePage:React.FC = () => {

  const { Footer, Content } = LayoutComp;
  return(
      <div className={style.home}>
        <HeaderComp/>
        <Content className={style.layout}>
          <Layout/>
        </Content>
        <Content>
          <ContentComp/>
        </Content>
        <Footer>
          <FooterComp/>
        </Footer>
      </div>
  )
}
export default HomePage;
