import React, { useState } from 'react';
import { Col, Layout, Row, Carousel, Typography, Space, Button } from 'antd';
import modules from './login.module.scss';
import LoginFormComp from "pages/Login/loginForm.comp";
import { IconFont } from "Config/icon";
import { WechatOutlined } from "@ant-design/icons";
import { NextPage } from 'next';

const Login: NextPage = () => {
  const { Content } = Layout;
  const [ imgState, setImgState ] = useState([
    "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-733856.jpg&fm=jpg",
    "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?cs=srgb&dl=pexels-pixabay-356043.jpg&fm=jpg",
    "https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?cs=srgb&dl=pexels-pixabay-48770.jpg&fm=jpg",
  ]);
  const { Text, Link } = Typography;

  return (
    <Content className={modules.content}>
      <Layout className={modules.wrapper}>
        <Layout.Header className={modules.header}>
          <IconFont type="iconhamp-logo" className={modules.logo}/>
          <span className={modules.title}>Hamp</span>
        </Layout.Header>
        <Content className={modules.ContentDAO}>
          <Row className={modules.row} justify={"space-between"} wrap={false}>
            <Col className={modules.col} span={14.4}>
              {/*TODO: 屏幕尺寸变化是，页面不会随之变化*/}
              <Carousel effect="fade" autoplay className={modules.carousel}>
                {
                  imgState.map((item) => {
                    return (
                      <img src={item} alt={""} className={modules.img} key={ item }/>
                    );
                  })
                }
              </Carousel>
            </Col>
            <Col className={modules.col} span={9.6}>
              <Row wrap={false}>
                <Space direction="vertical" >
                  <Col>
                    <Typography.Title>Welcome Back:)</Typography.Title>
                  </Col>
                  <Col>
                    <Text type="secondary">To keep connected with us please login with your personal information by account and password</Text>
                  </Col>
                  <Col>
                    <LoginFormComp/>
                  </Col>
                  <Col>
                    <Text type="secondary">Or you can login with</Text>
                  </Col>
                  <Col>
                    <span className={modules.iconButton}>
                      <Space>
                      <IconFont type="iconweixin" className={modules.logo}/>
                      <IconFont type="iconweixin" className={modules.logo}/>
                      <IconFont type="iconweixin" className={modules.logo}/>
                      </Space>
                    </span>
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Content>
  );
};
export default Login;
