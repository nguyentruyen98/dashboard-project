import "./index.scss";

import { Layout as AntdLayout } from "antd";
import clsx from "clsx";
import ThemeToggle from "components/themeToggle";
import useTheme from "hook/useTheme";
import Header from "pages/layout/header";
import Menu from "pages/layout/menu";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const { Header: AntdHeader, Sider, Content } = AntdLayout;

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <AntdLayout className={clsx("layout", theme)}>
      <Sider className={clsx("sider", toggle && "sider-collapse")} width={280}>
        <Menu toggle={toggle} setToggle={setToggle} />
      </Sider>
      <AntdLayout>
        <AntdHeader className="layout-header">
          <Header />
        </AntdHeader>
        <Content className="content">
          <Outlet />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
