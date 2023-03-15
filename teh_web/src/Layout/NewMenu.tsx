import React from 'react';
import {  Menu, theme } from 'antd';
const NewMenu = () => {
return (
<div>
<Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
</div>
);
};

export default NewMenu;