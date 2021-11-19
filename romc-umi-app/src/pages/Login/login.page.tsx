import React from 'react';
import { Col, Layout, Row } from 'antd';
import style from './login.module.css';
import LoginFormComp from "@pages/Login/loginForm.comp";

const LoginPage: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content>
        <div className={style.contentContainer}>
          <Row justify="center" align="middle">
            <Col span={6} className={style.formContainer}>
              <LoginFormComp/>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
export default LoginPage;
