import { Row, Col, Button, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import List from "./List";

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
        <h3>Thời trang nữ</h3>
        <small>
          Thời trang nữ tại Yody với mong muốn đem lại sự cân bằng giữa phong
          cách bên ngoài và sự thoải mái bên trong, toát lên sự gần gũi, trẻ
          trung cho quý khách hàng với các dòng sản phẩm như áo polo, áo phông,
          áo sơ mi, quần Jean.
        </small>
        <Tabs defaultActiveKey={1} type="card">
          <TabPane tab="Áo nữ" key={1}>
            <List />
          </TabPane>
          <TabPane tab="Quần nữ" key={2}>
            <List />
          </TabPane>
          <TabPane tab="Váy nữ" key={3}>
            <List />
          </TabPane>
          <TabPane tab="Đồ bộ nữ" key={4}>
            <List />
          </TabPane>
          <TabPane tab="Đồ mặc trong nữ" key={5}>
            <List />
          </TabPane>
          <TabPane tab="Phụ kiện nữ" key={6}>
            <List />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
});

export default styled(Man)`
  .container {
    padding-left: 15px;
  }
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
    margin: 0px 10px;
    display: block;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab:hover. {
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
  .ant-tabs-tab-active,
  .ant-tabs-tab:hover {
    background: var(--yellow-color) !important;
  }
  .ant-tabs-content-holder {
    padding-top: 25px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations {
    display: none;
  }
  .ant-tabs {
    padding-top: 25px;
  }
`;
