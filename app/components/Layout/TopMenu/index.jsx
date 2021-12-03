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
  Tag,
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
  EnvironmentFilled,
  PhoneOutlined,
  MailOutlined,
  PhoneFilled,
  MailFilled,
} from "@ant-design/icons";
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillLightningFill,
} from "react-icons/bs";
import { $Cookies } from "../../../utils/cookies";
import { Ui } from "../../../utils/Ui";
import { defineMessages, FormattedMessage } from "react-intl";
import { REACT_APP_URL_ID } from "utils/constants";
import Globals from "utils/globals";

import { AiOutlineShoppingCart } from "react-icons/ai";
import BANNERTOP from "images/bannertop.jpg";

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
        style={{ padding: 0, background: "var(--body-dark)" }}
      >
        <div className="headerTop">
          <Row gutter={15} className="clearStyle">
            <img
              src={BANNERTOP}
              alt="Yody sale black friday"
              style={{ width: "100%" }}
            />
          </Row>
        </div>
        <div className="headerTop container headerTopFix">
          <Row
            gutter={15}
            className="clearStyle container"
            justify="space-between"
            align="middle"
          >
            <div className="headertop__info">
              <Row justify="space-around" align="middle">
                <BsFillGeoAltFill style={{ paddingRight: "6px" }} />
                <Link to="/">
                  Tìm <span>150+ </span>cửa hàng
                </Link>
              </Row>
            </div>
            <div className="headertop__info">
              <Link to="/quang">
                <Row justify="space-around" align="middle">
                  <BsFillTelephoneFill style={{ paddingRight: "6px" }} />
                  <span>1800 2086</span>&nbsp;
                  <Tag style={{borderRadius: "30px", marginLeft: "2px"}} className="upperCase" color="#089e29">FREE</Tag>
                </Row>
              </Link>
            </div>
            <div className="headertop__info">
              <Row justify="space-around" align="middle">
                <BsFillEnvelopeFill style={{ paddingRight: "6px" }} />
                <Link to="/quang">chamsockhachhang@yody.vn</Link>
              </Row>
            </div>
            <div className="headertop__info upperCase">
              <BsFillLightningFill style={{ fontSize: "24px" }} />
              <Link to="/quang">FREESHIP ĐƠN HÀNG &gt; 498K</Link>
            </div>
            <div className="headertop__info upperCase">
              <BsFillLightningFill style={{ fontSize: "24px" }} />
              <Link to="/quang">
                MIỄN PHÍ ĐỔI TRẢ HÀNG TẠI ĐIỂM BÁN ĐẾN 15 NGÀY
              </Link>
            </div>
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
  .header-height,.header-height: hover {
    margin-top: 3px;
    background: var(--yellow-color);
    color: var(--blue-color);
    font-weight: 600;
  }
  .headertop__info.upperCase a {
    font-weight: 700;
    font-size: 14px;
  }
  .headertop__info:hover a {
    color: var(--body-bg);
  }
`;
