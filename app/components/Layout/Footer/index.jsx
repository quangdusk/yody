/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import React, { memo } from "react";
import styled from "styled-components";
import { Col, Row, Input, Divider } from "antd";
import { defineMessages, FormattedMessage } from "react-intl";
import * as style from "components/Variables";
import classNames from "classnames";
import Yody from "images/yody.png";
import Map from "images/map.svg";
import Phone from "images/phone.svg";
import Email from "images/email.svg";
import Mst from "images/mst.svg";
import BCT from "images/logo_bct.png";
import Zalo from "images/zalo.png";
import Shopee from "images/shoppee.png";
import Lazada from "images/Lazada.png";
import Sendo from "images/sendo.png";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

const { Search } = Input;
function Footer({ className }) {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{ background: "var(--blue-color)", color: "var(--body-bg)" }}
    >
      <div className="container">
        <Row>
          <Col md={8} style={{ padding: "0px 20px" }}>
            <p>
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
              hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn
              cùng YODY tiến bước”
            </p>
            <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
            <div className="footer__searchbar">
              <div className="footer__searchbar-main">
                <Search
                  placeholder="Nhập email đăng ký của bạn"
                  enterButton="Đăng ký"
                />
              </div>
            </div>
            <Row
              justify="space-between"
              align="middle"
              style={{ paddingTop: "30px" }}
            >
              <Col className="footer__branch">
                <BsFacebook />
              </Col>
              <Col className="footer__branch">
                <BsYoutube />
              </Col>
              <Col className="footer__branch">
                <BsInstagram />
              </Col>
              <Col className="footer__branch">
                <img src={Zalo} />
              </Col>
              <Col className="footer__branch">
                <img src={Shopee} />
              </Col>
              <Col className="footer__branch">
                <img src={Lazada} />
              </Col>
              <Col className="footer__branch">
                <img src={Sendo} />
              </Col>
            </Row>
          </Col>
          <Col
            md={4}
            className="footer_menu_second"
            style={{ padding: "0px 20px" }}
          >
            <h3>Về Yody</h3>
            <p>Giới thiệu</p>
            <p>Liên hệ</p>
            <p>Tuyển dụng</p>
            <p>Tin tức</p>
            <p>Hệ thống cửa hàng</p>
          </Col>
          <Col
            md={4}
            className="footer_menu_second"
            style={{ padding: "0px 20px" }}
          >
            <h3>Hỗ trợ khách hàng</h3>
            <p>Hướng dẫn chợn size</p>
            <p>Chính sách khách hàng thân thiết</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo mật</p>
            <p>Thanh toán, giao nhận</p>
          </Col>
          <Col md={8} style={{ padding: "0px 20px" }}>
            <Row align="middle" style={{ paddingBottom: "10px" }}>
              <Col md={3}>
                <img
                  src={Map}
                  alt="Công ty CP Thời Trang YODY, đường An Định, TP. Hải Dương"
                />
              </Col>
              <Col md={21}>
                Công ty CP Thời Trang YODY, đường An Định, TP. Hải Dương
              </Col>
            </Row>
            <Row align="middle" style={{ paddingBottom: "10px" }}>
              <Col md={3}>
                <img src={Phone} alt="yody phone" />
              </Col>
              <Col md={21}>
                <p style={{ marginBottom: "0px" }}>
                  Liên hệ đặt hàng: 024 730 56665
                </p>
                <p style={{ marginBottom: "0px" }}>
                  Thắc mắc đơn hàng: 024 730 16661
                </p>
                <p style={{ marginBottom: "0px" }}>
                  Góp ý khiếu nại: 1800 2086
                </p>
              </Col>
            </Row>
            <Row align="middle" style={{ paddingBottom: "10px" }}>
              <Col md={3}>
                <img src={Email} alt="chamsockhachhang@yody.vn" />
              </Col>
              <Col md={21}>chamsockhachhang@yody.vn</Col>
            </Row>
            <Row style={{ paddingBottom: "30px" }}>
              <Col md={3}>
                <img src={Mst} alt="Mã số thuế yody" />
              </Col>
              <Col md={21}>0801206940</Col>
            </Row>
            <Row>
              <img src={BCT} alt="Logo bộ công thương" />
            </Row>
          </Col>
        </Row>
        <Divider
          style={{ borderTop: "1px solid var(--header-menu-detail-light)" }}
        />
        <Row align="middle" justify="center">
          <p>@ Bản quyền thuộc về Yody.vn All right reserved</p>
        </Row>
      </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.any,
  pathName: PropTypes.any,
};

export default memo(styled(Footer)`
  .container {
    padding: 60px 0px 10px 0px;
  }
  .footer__searchbar .ant-input {
    height: 48px;
  }
  .footer__searchbar-main svg {
    font-size: 24px;
  }
  .footer__searchbar-main button {
    background: var(--price-color);
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    height: 48px;
    border-radius: 0px 10px 10px 0px !important;
    font-weight: 600;
  }
  .footer__searchbar-main input {
    border-radius: 10px 0px 0px 10px;
    line-height: 30px;
  }
  .ant-input-search .ant-input:hover,
  .ant-input-search .ant-input:focus {
    border-color: var(--price-color);
  }
  .footer__searchbar-main .ant-input-group-addon {
    border-radius: 0px 10px 10px 0px !important;
  }
  .container h3 {
    color: var(--body-bg);
    font-size: 14px;
    font-weight: 600;
    padding-top: 15px;
  }
  .ant-input-group-addon button {
    border-color: var(--body-bg);
    font-size: 16px;
  }
  .ant-input-group-addon:hover button {
    background: var(--body-bg);
    color: var(--price-color);
  }
  .ant-input-wrapper input {
    border: 1px solid var(--body-bg);
    font-size: 16px;
    background: var(--blue-color-tranparent);
    color: var(--body-bg);
  }
  .footer_menu_second h3 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: var(--body-bg);
    padding-top: 0px;
    padding-bottom: 10px;
  }
  .footer_menu_second p {
    margin-bottom: 8px !important;
  }
  .footer__branch:hover {
    transform: rotate(45deg);
    transition-duration: 1s;
  }
  .footer__branch {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--body-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .footer__branch svg {
    width: 30px;
    height: 30px;
    color: #22215b;
  }
  .footer__branch img {
    background: #22215b;
    border-radius: 50%;
  }
  .ant-input-search .ant-input:hover,
  .ant-input-search .ant-input:focus {
    border-color: var(--body-bg);
  }
`);
