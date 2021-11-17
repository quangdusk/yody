import { Row, Col, Tooltip, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import _ from "lodash";
import List from "./List";

const { TabPane } = Tabs;

const Hot = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
        paddingTop: "15px",
      }}
    >
      <div className="container">
        <h3 className="upperCase">Top sản phẩm bán chạy nhất trong tuần</h3>
        <Tabs defaultActiveKey={1} type="card">
          <TabPane tab="Tất cả" key={1}>
            <List />
          </TabPane>
          <TabPane tab="Nam" key={2}>
            <List />
          </TabPane>
          <TabPane tab="Nữ" key={3}>
            <List />
          </TabPane>
          <TabPane tab="Trẻ em" key={4}>
            <List />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
});

export default styled(Hot)`
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 20px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn, .ant-tabs-tab:hover. {
    color: var(--blue-color) !important;
    font-weight: 700;
  }
  .ant-tabs-tab-btn,
  .ant-tabs-tab-btn:hover {
    color: var(--blue-color) !important;
    min-width: 50px;
  }
  .ant-tabs-tab-btn {
    text-align: center;
  }
  .ant-tabs-nav {
    margin: auto !important;
  }
  .ant-tabs-tab {
    margin-left: 5px !important;
  }
  .ant-tabs-tab-active, .ant-tabs-tab:hover {
      background: var(--yellow-color)!important;
  }
  .ant-tabs-content-holder {
      padding-top: 25px;
  }
`;
