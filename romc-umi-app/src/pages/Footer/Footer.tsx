import {Space, Typography} from "antd";
import React from "react";
import './footer.scss';
const Footer:React.FC = () => {
  return(
      <div className='footer'>
        <Space wrap={true}  direction="vertical">
          <Typography.Text>
            Copyright©1999-2021, ctrip.com. All rights reserved. | ICP证：沪B2-20050130 | 沪ICP备08023580号
          </Typography.Text>
          <Typography.Text>
            沪公网备31010502002731号丨互联网药品信息服务资格证
          </Typography.Text>
          <Typography.Text>
            违法和不良信息举报电话021-22500846丨全国旅游投诉热线12301丨上海市旅游网站落实诚信建设主体责任承诺书
          </Typography.Text>
        </Space>

      </div>
  )
}
export default Footer;
