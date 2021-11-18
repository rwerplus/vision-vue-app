import {Col, Row, Typography, Dropdown, Menu, Space, Divider} from "antd";
import {CaretDownFilled, GlobalOutlined, MobileTwoTone, WechatFilled} from '@ant-design/icons'
import React, {useState} from "react";
import style from './Header.module.css'
import { useUserStore } from '../../store';
import { observer } from 'mobx-react';

const HeaderComp: React.FC = observer(() => {
// const userStore = useLocalObservable(() => store);
  const {getUsername,setUsername} = useUserStore();
  const [size, setSize] = useState(6);
  const menu = (
      <Menu>
        <Menu.Item>
          中文
        </Menu.Item>
        <Menu.Item>
          English
        </Menu.Item>
      </Menu>
  );
  return (
      <div className={style['nav-header']}>
        <div className={style['nav-header-cont']}>
          <Row wrap={false} align='middle' justify='space-around' style={{height: '36px', lineHeight: '36px'}}>
            <Col flex={4}/>
            <Col flex={4}>
              <Space split={<Divider type="vertical"/>}>
                <Typography.Text>让旅游更幸福</Typography.Text>
                <Dropdown
                    trigger={['click']}
                    overlay={menu}>
                  <Space size={size} className={style.link}>
                    <GlobalOutlined className={style.icon}/>
                    <Typography.Text>
                        Language
                    </Typography.Text>
                    <CaretDownFilled className={style.icon}/>
                  </Space>
                </Dropdown>
              </Space>
            </Col>
            <Col flex={12}>
              <Space split={<Divider type="vertical"/>} style={{justifyContent: 'flex-end',display: 'flex'}}>
                <Typography.Link>
                  <span  onClick={() => setUsername('张三')}>    测试store</span>
                </Typography.Link>
                <Typography.Text>
                  免费注册
                </Typography.Text>
                <Typography.Text>
                  消息
                </Typography.Text>
                <Typography.Text>
                  我的携程
                </Typography.Text>
                <Typography.Text>
                  我的订单
                </Typography.Text>
                <Typography.Text>
                  客服中心
                </Typography.Text>
                <Typography.Text>
                  <MobileTwoTone />
                </Typography.Text>
                <Typography.Text>
                  <WechatFilled />
                </Typography.Text>
            </Space>
            </Col>
            <Col flex={4}/>
          </Row>,
        </div>
      </div>
  )
})
export default HeaderComp;
