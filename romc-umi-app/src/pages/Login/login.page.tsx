import React from 'react';
import { Col, Layout, Row, Carousel } from 'antd';
import modules from './login.module.scss';
import LoginFormComp from "@pages/Login/loginForm.comp";
import { ImportOutlined } from "@ant-design/icons";
import { IconFont } from "@/Config/icon";

const LoginPage: React.FC = () => {
  const { Content, Header, Sider } = Layout;

  const contentStyle = {
    height: "60em",
    width: "auto",
    color: "#fff",
    lineHeight: "160px",
    TextAlign: "center" as string,
    background: "#364d79",
  };

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
              <Carousel effect="fade" autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
              </Carousel>
            </Col >
            <Col className={modules.col} span={9.6}>321321</Col>
          </Row>
        </Content>
      </Layout>
    </Content>
  );
};
export default LoginPage;
