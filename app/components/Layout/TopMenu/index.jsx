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
  Badge,
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
  LogoutOutlined
} from "@ant-design/icons";
import { $Cookies } from "../../../utils/cookies";
import { Ui } from "../../../utils/Ui";
import { defineMessages, FormattedMessage } from "react-intl";
import { BsBoxArrowInRight } from "react-icons/bs";
import { REACT_APP_URL_ID } from "utils/constants";
import Globals from "utils/globals";
import Yody from "images/yody.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
            <Col md={18} className="customerMenu">
              <Row
                justify="start"
                align="middle"
                style={{ height: "100%" }}
              >
                <Link to="/">Tra cứu đơn hàng</Link>
                <Link to="/">Tạp trí thời trang</Link>
                <Link to="/">Liên hệ</Link>
                <Link className="toUpperCase" to="/">
                  Hệ thống cửa hàng toàn quốc
                </Link>
                <Link className="career" to="/">
                  Tuyển dụng
                </Link>
              </Row>
            </Col>
            <Col md={6}>
              <Row justify="end" align="middle" style={{ height: "100%" }}>
                <a href="tel:1800 2086">
                  Hotline: <b>1800 2086</b> (Miễn phí)
                </a>
              </Row>
            </Col>
          </Row>
        </div>
        <Divider
          style={{
            margin: "unset",
            marginBottom: "10px",
          }}
        />
        <div className="headerTop container">
          <Row
            gutter={15}
            className="clearStyle container"
            justify="space-around"
            align="middle"
          >
            <Col md={4} className="logo">
              <img data-src={Yody} src={Yody} alt="logo-yody" />
            </Col>
            <Col md={14} className="header__search">
              <div className="header__searchbar">
                <div className="header__searchbar-main">
                  <Search placeholder="Áo phao mùa đông 2021" enterButton />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Row justify="end" align="middle">
                <Col>
                  {/* <Button className="header-height" style={{ marginRight: "10px", fontSize: "20px" }}> */}
                    <Badge count={99} style={{marginRight: "30px"}}>
                      <AiOutlineShoppingCart style={{ fontSize: "30px", marginRight: "30px" }} />
                    </Badge>
                  {/* </Button> */}
                </Col>
                <Col>
                  <Button className="header-height">Đăng nhập</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Header>
    );
  }
);
TopMenu.propTypes = {
  className: PropTypes.any.isRequired,
};
export default styled(TopMenu)`
  background: #fff;

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
      90deg,
      var(--blue-color) 32%,
      var(--yellow-color) 30%
    );
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
  .logo img {
    height: 65px;
    width: 102px;
  }
  .ant-input,
  .ant-input-group-addon button {
    height: 2.5rem;
  }
  .ant-input-group-addon button {
    background: var(--blue-color);
  }
  .ant-input-group-addon button span {
    font-size: 20px;
  }
  .header-height {
    margin-top: 3px;
    background: var(--yellow-color);
    color: var(--blue-color);
    font-weight: 600;
  }
  .customerMenu .ant-row a {
    margin-right: 15px;
  }
`;
