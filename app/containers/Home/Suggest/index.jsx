import { Row, Col, Button, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import List from "./List";

const { TabPane } = Tabs;

const Suggest = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 600,
          color: "var(--price-color)",
        }}
      >
        Đề xuất cho bạn
      </h3>
      <Tabs defaultActiveKey={1} type="card">
        <TabPane tab="Bán chạy nhất" key={1}>
          <List />
        </TabPane>
        <TabPane tab="Thời trang nam" key={2}>
          <List />
        </TabPane>
        <TabPane tab="Thời trang nữ" key={3}>
          <List />
        </TabPane>
        <TabPane tab="Thời trang trẻ em" key={4}>
          <List />
        </TabPane>
        <TabPane tab="Polo Yody Sale" key={5}>
          <List />
        </TabPane>
      </Tabs>
      <Row className="banner__sale-button" align="middle" justify="center">
        <Button>Xem thêm</Button>
      </Row>
    </div>
  );
});

export default styled(Suggest)`
  .container h3 {
    text-align: center;
    text-transform: uppercase;
    padding-top: 20px;
    font-size: 22px;
    font-weight: 600;
    color: var(--price-color);
    padding-bottom: 15px;
  }
  .container small {
    font-size: 13px;
    color: var(--header-menu-detail-light);
    font-weight: 400;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab:hover. {
    color: var(--blue-color) !important;
    font-weight: 700;
  }
  .ant-tabs-tab-btn {
    color: var(--text-color) !important;
    min-width: 50px;
  }
  .ant-tabs-tab:hover .ant-tabs-tab-btn {
    color: var(--body-bg) !important;
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
    background: var(--price-color) !important;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--body-bg) !important;
  }
  .ant-tabs-content-holder {
    padding-top: 25px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations {
    display: none;
  }
  .ant-tabs-tab {
    color: var(--text-color) !important;
  }
  .banner__sale-button button {
    height: 50px;
    width: 285px;
    background: var(--price-color);
    color: var(--body-bg);
    border: 1px solid var(--price-color);
    font-size: 18px;
    font-weight: 600;
  }
  .banner__sale-button button:hover {
    background: var(--body-bg);
    color: var(--price-color);
  }
`;
