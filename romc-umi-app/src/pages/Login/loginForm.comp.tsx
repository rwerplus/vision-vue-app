import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import modules from './loginform.module.scss';

const LoginFormComp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      size="large"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
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
          <Button shape="round" type="default"disabled block={true} htmlType="submit" className="login-form-button">
            Create Account
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
export default LoginFormComp;
