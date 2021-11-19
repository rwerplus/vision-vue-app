import React from 'react';
import { Col, Layout, Row } from 'antd';
import style from './login.module.css';
import LoginFormComp from "@pages/Login/loginForm.comp";

const LoginPage: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content className={style.contentWrap}>
        <Row justify="center" align="middle" className={style.formContainer}>
          <Col span={6}>
            <LoginFormComp/>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default LoginPage;
