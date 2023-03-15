import React from 'react';
import { Breadcrumb,Layout,theme } from 'antd';
const {  Content } = Layout;


const NewHeader = () => {
const {
    token: { colorBgContainer },
  } = theme.useToken();
return (

<div>


<Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          Content
        </div>
      </Content>
</div>
);

};

export default NewHeader;
