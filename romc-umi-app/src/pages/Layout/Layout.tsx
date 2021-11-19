import { Space, Input, Layout as LayoutComp, } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import style from "../HomePage/HomePage.module.css";
import { Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Layout:React.FC = () => {
  const token = Cookies.get("token");
  console.log("123456",!token);
  const nav = useNavigate();

  useEffect(() => {
    if (!token) {
      nav("login", {
        replace: true
      })
    }
  },[nav, token])
  const suffix = (
      <AudioOutlined
          style={{
            fontSize: 14,
            color: '#1890ff',
          }}
      />
  );
  const onSearch = (value: any) => console.log(value);
  return(
      <Space size='large'>
        <img
            className={style.logo}
            width='406'
            height='68'
            src="https://pic.c-ctrip.com/platform/online/login/c_logo2020.png" alt=""/>
        <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="middle"
            width={500}
            style={{marginLeft: '60px'}}
            suffix={suffix}
            onSearch={onSearch}
        />
        <Outlet/>
      </Space>
  )
}
export default Layout
