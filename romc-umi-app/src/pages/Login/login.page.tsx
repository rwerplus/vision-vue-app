import React from 'react';
import { Col, Layout, Row } from 'antd';
import './login.scss';
import LoginFormComp from "@pages/Login/loginForm.comp";

const LoginPage: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content className="contentWrap">
        <Row justify="center" align="middle" className="formContainer">
          <Col span={18} flex={1} className="formMaintain">
            <LoginFormComp/>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default LoginPage;
