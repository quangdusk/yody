import { Row, Col, Button, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import List from "../Hot/List";

const { TabPane } = Tabs;

const Man = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
        paddingBottom: "70px",
      }}
    >
      <div className="container">
        <h3>Thời trang nam</h3>
        <small>
          Thời trang nam Yody mang lại sự hòa hợp về cá tính, đem lại cảm giác
          thoải mái từ bên trong và tư tin ở bên ngoài với các sản phẩm thời
          trang quốc dân như áo polo, áo thun, áo sơ mi, quần âu, quần jean và
          giày nam.
        </small>
        <Tabs defaultActiveKey={1} type="card">
          <TabPane tab="Áo nam" key={1}>
            <List />
          </TabPane>
          <TabPane tab="Quần nam" key={2}>
            <List />
          </TabPane>
          <TabPane tab="Đồ mặc nhà nam" key={3}>
            <List />
          </TabPane>
          <TabPane tab="Đồ mặc trong" key={4}>
            <List />
          </TabPane>
          <TabPane tab="Phụ kiện nam" key={5}>
            <List />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
});

export default styled(Man)`
  .container h3 {
    text-align: center;
    text-transform: uppercase;
    padding-top: 60px;
    font-size: 22px;
    font-weight: 600;
  }
  .container small {
      font-size: 13px;
      color: var(--header-menu-detail-light);
      font-weight: 400;
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
      padding-right: 12px;
      padding-left: 12px;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations {
      display: none;
  }
`;
