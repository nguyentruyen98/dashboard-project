import './index.scss';

import {Layout as AntdLayout} from 'antd';
import clsx from 'clsx';
import Header from 'pages/layout/header';
import Menu from 'pages/layout/menu';
import React, {useState} from 'react';

import {Outlet} from 'react-router-dom';

const {Header: AntdHeader, Sider, Content} = AntdLayout;

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <AntdLayout className="layout">
      <Sider className={clsx('sider', toggle && 'sider-collapse')} width={250}>
        <Menu toggle={toggle} setToggle={setToggle} />
      </Sider>
      <AntdLayout>
        <AntdHeader className="layout-header">
          <Header />
        </AntdHeader>
        <Content className="content">
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
