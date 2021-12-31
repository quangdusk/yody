/* eslint-disable react/prop-types */
import React, { memo, useEffect, useCallback, useState } from "react";
import {
  makeSelectIsAuthenticated,
  makeSelectAppConfig,
} from "containers/App/selectors";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from "react-error-boundary";
import ServiceBase from "utils/ServiceBase";
import { browseGlobalConfig, logOut } from "containers/App/actions";
import { connect } from "react-redux";
import { BackTop, Layout } from "antd";
import styled from "styled-components";
import { compose } from "recompose";
import ErrorMessage from "components/ErrorMessage";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import SubTopMenu from "./SubTopMenu";
import Footer from "./Footer";
import classNames from "classnames";
import { Table } from "antd";
import { $Cookies } from "utils/cookies";
import { JWT_TOKEN } from "utils/constants";
import Globals from "utils/globals";
import { BsArrowUpShort } from "react-icons/bs";

const { Header, Content, Sider } = Layout;
const AuthorizedLayout = ({
  className,
  location,
  children,
  profile,
  isAuthenticated,
  onBrowseGlobalConfig,
  onLogOut,
  appConfig,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const token = $Cookies.get(JWT_TOKEN);
  const onBrowseGlobalConfigRequest = useCallback(async () => {
    if (token) {
      const resultEntry = await ServiceBase.requestJson({
        method: "GET",
        url: "/menu",
        data: {},
      });
      // khi token hết hạn sẽ logout
      if (resultEntry.hasErrors) {
        // Globals.clear();
      } else {
        onBrowseGlobalConfig(resultEntry);
      }
    }
  }, [token]);
  useEffect(() => {
    onBrowseGlobalConfigRequest();
  }, [onBrowseGlobalConfigRequest]);

  //check handle scroll
  const [scroll, setScroll] = useState(1);
  var previousPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  window.onscroll = function() {
    var currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (previousPosition > currentPosition) {
      setScroll(1);
    } else {
      setScroll(2);
    }
    previousPosition = currentPosition;
  };
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: 'var(--text-active)',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <Layout
      className={classNames({
        [className]: true,
      })}
    >
      {/* <SideBar appConfig={appConfig} collapsed={collapsed} /> */}
      <Layout className="site-layout">
        <TopMenu
          toggle={toggle}
          collapsed={collapsed}
          onLogOut={onLogOut}
          location={location}
        />
        <SubTopMenu
          className={classNames({
            subTopMenu: scroll == 1 ? true : false,
            subTopMenuUp: scroll == 1 ? false : true
          })}
          isAuthenticated={isAuthenticated}
          profile={profile}
        />
        <Content
          style={{
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer />
        <BackTop style={style}>
          <BsArrowUpShort />
        </BackTop>
      </Layout>
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  appConfig: makeSelectAppConfig(),
});
const mapDispatchToProps = (dispatch) => ({
  onBrowseGlobalConfig: (resultEntry) =>
    dispatch(browseGlobalConfig(resultEntry)),
  onLogOut: () => dispatch(logOut()),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default styled(
  compose(
    withConnect,
    memo
  )(AuthorizedLayout)
)`
  min-height: 100vh;
  header {
    padding: 0;
    height: 100%;
    line-height: inherit;
  }
  .site-layout-background {
    background: var(--body-bg);
  }
  .site-layout {
    font-family: Quicksand, sans-serif;
    font-weight: 600;
  }
  .subTopMenu {
    position: sticky;
    top: 0;
    z-index: 999;
    background: var(--body-bg);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: animateTopDown 0.4s;
  }
  .subTopMenuUp {
    position: sticky;
    background: var(--body-bg);
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: animateTopUp 2s;
  }
  .ant-back-top svg {
    font-size: 32px;
  }
`;
