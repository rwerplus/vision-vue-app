import { Space, Input, } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import React from "react";
import style from "../HomePage/HomePage.module.css";

const Layout:React.FC = () => {
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
      </Space>
  )
}
export default Layout
