import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import modules from './loginform.module.scss';
import { IconFont } from 'Config/icon';
import { Content } from 'antd/lib/layout/layout';
import { NextPage } from 'next';

const LoginFormComp: NextPage = () => {
  interface ValidStatus {
    usr: Boolean,
    prd: Boolean
  }
  const [valid, setValid] = useState<ValidStatus>({
    usr: false,
    prd: false
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setValid({ usr: true, prd: true })
  };
  const onFinishFailed = (errorInfo: any) => {
    const { values } = errorInfo
    setValid({ usr: values.username, prd: values.password })
    console.log(valid);
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="normal_login"
      size="large"
      initialValues={{ remember: true }}
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
    >
      <Content className={modules.formWrap}>
        <Form.Item
          name="username"
          hasFeedback className={modules.formItem}
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <div className={modules.formContain} style={{ backgroundColor: valid.usr ? "rgb(236, 243, 245)" : "#fff" }}>
            <IconFont type="iconzhanghaoanquan" className={modules.account} />
            <Input className={valid.usr ? modules.input : ""} bordered={false} placeholder="Username" />
          </div>
        </Form.Item>
        <Form.Item
          name="password"
          hasFeedback className={modules.formItem}
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <div className={modules.formContain} style={{ backgroundColor: valid.prd ? "rgb(236, 243, 245)" : "#fff" }}>
            <IconFont type="iconzhanghaomima" className={modules.account} />
            <Input className={valid.prd ? modules.input : ""} bordered={false}
              type="password"
              placeholder="Password"
            />
          </div>

        </Form.Item>
      </Content>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Space size={36}>
          <Button shape="round" type="primary" block={true} htmlType="submit" className={modules["login-form-button"]}>
            Login Now
          </Button>
          <Button shape="round" type="default" disabled block={true} htmlType="submit" className="login-form-button">
            Create Account
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default LoginFormComp;
