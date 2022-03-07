import "./index.scss";

import { Layout as AntdLayout } from "antd";
import clsx from "clsx";
import Loading from "components/loading";
import ThemeToggle from "components/themeToggle";
import Header from "pages/layout/header";
import Menu from "pages/layout/menu";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  changeTheme,
  useApplicationDispatch,
  useApplicationSelector,
} from "stores/application/application";

const { Header: AntdHeader, Sider, Content } = AntdLayout;

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const applicationState = useApplicationSelector((state) => state.application);
  const dispatch = useApplicationDispatch();

  return (
    <AntdLayout className={clsx("layout", applicationState.theme)}>
      <Sider className={clsx("sider", toggle && "sider-collapse")} width={280}>
        <Menu toggle={toggle} setToggle={setToggle} />
      </Sider>
      <AntdLayout>
        <AntdHeader className="layout-header">
          <Header />
        </AntdHeader>
        {applicationState.loading && <Loading />}
        <Content className="content">
          <Suspense fallback={<></>}>
            <Outlet />
            <ThemeToggle
              theme={applicationState.theme}
              setTheme={() => dispatch(changeTheme())}
            />
          </Suspense>
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
