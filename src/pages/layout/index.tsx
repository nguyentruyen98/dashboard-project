import './index.scss';

import {Layout as AntdLayout} from 'antd';
import clsx from 'clsx';
import Loading from 'components/loading';
import ThemeToggle from 'components/themeToggle';
import useDetectScreen from 'hook/useDetectScreen';
import Header from 'pages/layout/header';
import Menu from 'pages/layout/menu';
import React, {Suspense, useLayoutEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {
  changeTheme,
  setToggle,
  useApplicationDispatch,
  useApplicationSelector,
} from 'stores/application/application';

const {Header: AntdHeader, Sider, Content} = AntdLayout;

const Layout = () => {
  const applicationState = useApplicationSelector(state => state.application);
  const dispatch = useApplicationDispatch();
  const isDesktopScreen = useDetectScreen();

  useLayoutEffect(() => {
    if (isDesktopScreen) {
      dispatch(setToggle(false));
    } else {
      dispatch(setToggle(true));
    }
  }, [isDesktopScreen, dispatch]);

  return (
    <AntdLayout className={clsx('layout', applicationState.theme)}>
      <Sider
        className={clsx('sider', applicationState.toggle && 'sider-collapse')}
      >
        <Menu
          toggle={applicationState.toggle}
          setToggle={() => dispatch(setToggle(!applicationState.toggle))}
        />
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
