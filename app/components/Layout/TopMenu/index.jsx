/* eslint-disable no-underscore-dangle */
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Row,
  Col,
  Layout,
  Button,
  Tooltip,
  Modal,
  Breadcrumb,
  Divider,
} from "antd";
import styled from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";
import * as style from "components/Variables";
import classNames from "classnames";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { $Cookies } from "../../../utils/cookies";
import { Ui } from "../../../utils/Ui";
import { defineMessages, FormattedMessage } from "react-intl";
import { BsBoxArrowInRight } from "react-icons/bs";
import { REACT_APP_URL_ID } from "utils/constants";
import Globals from "utils/globals";

// import AppLocale from "../../../languageProvider";

const { Header, Sider, Content } = Layout;
// components
const { Search } = Input;
const TopMenu = memo(
  ({
    isAuthenticated,
    profile,
    className,
    onLogOut,
    toggle,
    collapsed,
    location,
  }) => {
    let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    const prefix = "app.routing.";
    const urlName = location.pathname;
    const _messages = defineMessages({
      moduleName: {
        id: `${prefix}${urlName}`,
        defaultMessage: "Không tìm thấy trang",
      },
    });
    const urlRoutes = urlName.slice(0, 3);

    const proFile = $Cookies.get("ERP_REPORT")
      ? JSON.parse($Cookies.get("ERP_REPORT"))
      : {};
    const [visible, setVisible] = useState(false);
    const logOut = () => {
      setVisible(true);
    };
    const handleOk = () => {
      setVisible(false);
      Ui.showSuccess({ message: "Đã đăng xuất." });
      // logout sso
      Globals.clear();
      console.log("REACT_APP_URL_ID", REACT_APP_URL_ID);
      window.location.href = `${REACT_APP_URL_ID}`;
      // onLogOut();
    };
    const handleCancel = () => {
      setVisible(false);
    };
    return (
      <Header
        className={classNames({
          [className]: true,
        })}
        style={{ padding: 0 }}
      >
        <div className="headerTop container">
          <Row gutter={15} className="clearStyle container">
            <Col md={12} className="customerMenu">
              <Row
                justify="space-between"
                align="middle"
                style={{ height: "100%" }}
              >
                <Link to="/">Tra cứu đơn hàng</Link>
                <Link to="/">Tạp trí thời trang</Link>
                <Link to="/">Liên hệ</Link>
                <Link className="toUpperCase" to="/">
                  Hệ thống cửa hàng toàn quốc
                </Link>
                <Link className="career" to="/">Tuyển dụng</Link>
              </Row>
            </Col>
            <Col md={12}>
              <Row justify="end" align="middle" style={{ height: "100%" }}> 
                <a href="tel:1800 2086">
                  <b>1800 2086</b>
                </a>
              </Row>
            </Col>
          </Row>
        </div>
        {/* <Row gutter={15} className="clearStyle container">
          <Col md={12} className="customerMenu">
            <Row justify="start">
              <Col md={4}>
                <p>Tra cứu đơn hàng</p>
              </Col>
              <Col md={4}>
                <p>Tạp trí thời trang</p>
              </Col>
              <Col md={4}>
                <p className="toUpperCase">Hệ thống cửa hàng toàn quốc</p>
              </Col>
              <Col md={4}>
                <p>Tuyển dụng</p>
              </Col>
            </Row>
          </Col> */}
        {/* <Col md={11} className="customerMenu">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Col>
          <Col
            md={11}
            className="d-flex justify-content-end align-items-center"
          >
            {proFile.adm_name && <b>Chào,{proFile.adm_name}</b>}
          </Col>
          <Col md={1}>
            <Tooltip placement="topLeft" title="Đăng Xuất">
              <Button
                type="link"
                icon={<BsBoxArrowInRight />}
                onClick={logOut}
              />
            </Tooltip>
          </Col>
          <Modal
            title="Thông Báo"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Đồng ý"
            okButtonProps={{
              style: {
                background: "#0bc40b",
                borderRadius: "16px",
                fontWeight: "bold",
                color: "#fff",
              },
            }}
            cancelButtonProps={{
              style: {
                background: "red",
                borderRadius: "16px",
                fontWeight: "bold",
                color: "#fff",
              },
            }}
          >
            <h3 className="text-center">Bạn có thực sự muốn thoát ??</h3>
          </Modal> */}
        {/* </Row> */}
        <Divider
          style={{
            // border: "1px solid #cccccc",
            margin: "unset",
            marginBottom: "10px",
          }}
        />

        <Row gutter={15} className="clearStyle">
          <Col md={22} className="customerHome">
            <Breadcrumb style={{ padding: "0px 25px" }} separator="/">
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">
                  <b>Trang chủ</b>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={urlName}>
                  <b>
                    <FormattedMessage {..._messages.moduleName} />
                  </b>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Header>
    );
  }
);
TopMenu.propTypes = {
  className: PropTypes.any.isRequired,
};
export default styled(TopMenu)`
  background: #fff;

  .trigger {
    font-size: 18px;
    line-height: 40px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #4c4c4c;
  }
  .customerMenu {
    height: 40px;
    .anticon svg {
      font-size: 20px;
    }
  }
  .customerHome {
    .anticon svg {
      font-size: 16px;
      margin-top: -8px;
    }
  }
  .ant-btn-icon-only * {
    font-size: 25px;
    color: #7f7f7f;
  }
  .toUpperCase {
    padding: 0px 5px 0px 5px;
    background: var(--blue-color);
    color: var(--yellow-color);
    font-weight: 600;
  }
  .toUpperCase:hover {
    background: linear-gradient(
      90deg, var(--blue-color) 32%, var(--yellow-color) 30%);
    color: var(--body-bg);
  }
  .career {
    color: var(--body-bg);
    background: red;
    padding: 0px 5px;
    animation-name: scaleUp;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
`;
