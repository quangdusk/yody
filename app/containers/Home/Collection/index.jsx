import { Row, Col, Button, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import banner_hangngay_1 from "images/banner_hangngay_1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const Collection = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-grey)",
        position: "relative",
        paddingBottom: "30px",
      }}
    >
      <div className="container">
        <h3 style={{ color: "var(--price-color)" }}>Bộ sưu tập áo khoác</h3>
        <img
          src={banner_hangngay_1}
          width="100%"
          height="390px"
          alt="Bộ sưu tập áo khoác Yody"
          style={{ width: "100%", paddingBottom: "25px" }}
          loading="lazy"
        />
        <Slide count={6} />
        <Row className="banner__sale-button" align="middle" justify="center">
          <Button>Xem thêm</Button>
        </Row>
      </div>
    </div>
  );
});

export default styled(Collection)`
  .container h3 {
    text-align: center;
    text-transform: uppercase;
    padding-top: 50px;
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 20px;
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
