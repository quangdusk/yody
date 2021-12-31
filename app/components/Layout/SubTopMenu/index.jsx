/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import styled from "styled-components";
import {
  Select,
  Col,
  Popover,
  Row,
  Input,
  Badge,
  Drawer,
  Space,
  Button,
  Tabs,
  Tooltip,
  Avatar,
} from "antd";
import { Link } from "react-router-dom";
import { defineMessages, FormattedMessage } from "react-intl";
import * as style from "components/Variables";
import { AiOutlineLine, AiOutlineShoppingCart, AiOutlineTwitter } from "react-icons/ai";
import classNames from "classnames";
import Yody from "images/yody.png";
const prefix = "app.routing.";
import { BsPerson, BsHeart, BsHandbag } from "react-icons/bs";
import Nam1 from "images/nam1.jpg";
import Nam2 from "images/nam2.jpg";
import Nu1 from "images/nu1.jpg";
import Nu2 from "images/nu2.jpg";
import Treem1 from "images/treem1.jpg";
import Treem2 from "images/treem2.jpg";
import Collect1 from "images/collect1.jpg";
import Collect2 from "images/collect2.jpg";
import Collect3 from "images/collect3.jpg";
import Collect4 from "images/collect4.jpg";
import Endow from "images/endow.jpg";
import { RightOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlineBars } from "react-icons/ai";

const { Search } = Input;
const { TabPane } = Tabs;
function SubTopMenu({ className, pathName, isAuthenticated, profile }) {
  const _messages = defineMessages({
    moduleName: {
      id: `${prefix}${pathName}`,
      defaultMessage: "Không tìm thấy trang",
    },
  });

  const menuWomen = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
          <Col md={4}>
            <Row>
              <img
                src={Nu1}
                alt="Thời trang nữ yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
          <Col md={16}>
            <Row justify="space-around">
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Áo nữ</h3>
                </Link>
                <Link to="/">
                  <p>Áo polo nữ Yody</p>
                </Link>
                <Link to="/">
                  <p>Áo thun/ Áo phông nữ</p>
                </Link>
                <Link to="/">
                  <p>Áo sơ mi nữ</p>
                </Link>
                <Link to="/">
                  <p>Áo khoác nữ</p>
                </Link>
                <Link to="/">
                  <p>Áo Hoodie - Áo nỉ nữ</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Quần nữ</h3>
                </Link>
                <Link to="/">
                  <p>Quần âu nữ</p>
                </Link>
                <Link to="/">
                  <p>Quần jean nữ</p>
                </Link>
                <Link to="/">
                  <p>Quần short nữ</p>
                </Link>
                <Link to="/">
                  <p>Quần kaki nữ</p>
                </Link>
                <Link to="/">
                  <p>Quần legging nữ</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Váy nữ</h3>
                </Link>
                <Link to="/">
                  <p>Đầm nữ - Váy liền thân</p>
                </Link>
                <Link to="/">
                  <p>Chân váy</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Đồ bộ nữ</h3>
                </Link>
                <Link to="/">
                  <p>Đồ bộ thời trang</p>
                </Link>
                <Link to="/">
                  <p>Đồ bộ nữ mặc nhà</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Đồ mặc trong nữ</h3>
                </Link>
                <Link to="/">
                  <p>Đồ lót nữ</p>
                </Link>
                <Link to="/">
                  <p>Áo dữ nhiệt nữ</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Phụ kiện nữ</h3>
                </Link>
                <Link to="/">
                  <p>Ví nữ</p>
                </Link>
                <Link to="/">
                  <p>Thắt lưng nữ</p>
                </Link>
                <Link to="/">
                  <p>Giày nữ</p>
                </Link>
                <Link to="/">
                  <p>Túi xách</p>
                </Link>
                <Link to="/">
                  <p>Phụ kiện nữ khác</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <img
                src={Nu2}
                alt="Thời trang nữ yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  const menuMan = () => {
    return (
      <>
        <Row className="header__menu-detail">
          <Col md={4}>
            <Row>
              <img
                src={Nam1}
                alt="Thời trang nam yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
          <Col md={16}>
            <Row justify="space-around">
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Áo</h3>
                </Link>
                <Link to="/">
                  <p>
                    Áo polo nam Yody{" "}
                    <span className="header__menu-detail-status">Hot</span>
                  </p>
                </Link>
                <Link to="/">
                  <p>Áo thun nam/ Áo phông nam</p>
                </Link>
                <Link to="/">
                  <p>Áo khoác nam</p>
                </Link>
                <Link to="/">
                  <p>
                    Áo sơ mi nam{" "}
                    <span className="header__menu-detail-status">New</span>
                  </p>
                </Link>
                <Link to="/">
                  <p>
                    Áo vest nam{" "}
                    <span className="header__menu-detail-status">Sale</span>
                  </p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Quần</h3>
                </Link>
                <Link to="/">
                  <p>Quần tây nam/ quần âu nam</p>
                </Link>
                <Link to="/">
                  <p>Quần jean nam</p>
                </Link>
                <Link to="/">
                  <p>Quần short nam</p>
                </Link>
                <Link to="/">
                  <p>Quần kaki nam</p>
                </Link>
                <Link to="/">
                  <p>Quần legging nữ</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Đồ mặc nhà</h3>
                </Link>
                <Link to="/">
                  <p>Áo ba lỗ nam</p>
                </Link>
                <Link to="/">
                  <p>Đồ bộ nam</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Đồ mặc trong</h3>
                </Link>
                <Link to="/">
                  <p>Đồ lót nam</p>
                </Link>
                <Link to="/">
                  <p>Áo giữ nhiệt nam</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Phụ kiện</h3>
                </Link>
                <Link to="/">
                  <p>Giày nam</p>
                </Link>
                <Link to="/">
                  <p>Mũ nam</p>
                </Link>
                <Link to="/">
                  <p>Thắt lưng nam</p>
                </Link>
                <Link to="/">
                  <p>Phụ kiện nam khác</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <img
                src={Nam2}
                alt="Thời trang nam yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  const menuChildren = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
          <Col md={4}>
            <Row>
              <img
                src={Treem1}
                alt="Thời trang nam yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
          <Col md={16}>
            <Row justify="space-around">
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Áo trẻ em</h3>
                </Link>
                <Link to="/">
                  <p>Áo thun/ áo phông trẻ em</p>
                </Link>
                <Link to="/">
                  <p>Áo len cho em bé</p>
                </Link>
                <Link to="/">
                  <p>Áo polo trẻ em</p>
                </Link>
                <Link to="/">
                  <p>Áo khoác trẻ em</p>
                </Link>
                <Link to="/">
                  <p>Áo hoodie - Áo nỉ trẻ em</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Váy đầm trẻ em</h3>
                </Link>
                <Link to="/">
                  <p>Chân váy trẻ em</p>
                </Link>
                <Link to="/">
                  <p>Đầm bé gái</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Quần trẻ em</h3>
                </Link>
                <Link to="/">
                  <p>Quần dài cho bé</p>
                </Link>
                <Link to="/">
                  <p>Quần short trẻ em</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Bộ đồ trẻ em</h3>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Phụ kiện trẻ em</h3>
                </Link>
                <Link to="/">
                  <p>Mũ nó cho bé</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <img
                src={Treem2}
                alt="Thời trang nam yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  const menuCollection = () => {
    return (
      <>
        <Row justify="space-around">
          <Col md={5}>
            <Row>
              <h3
                className="upperCase"
                style={{ paddingTop: "10px", marginBottom: "0px" }}
              >
                BST thời trang thu đông
              </h3>
              <img
                src={Collect1}
                alt="Bộ sưu tập thời trang thu đông"
                width="100%"
                loading="lazy"
                style={{
                  paddingTop: "4px",
                  height: "130px!important",
                  paddingRight: "20px",
                }}
              />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <h3
                className="upperCase"
                style={{ paddingTop: "10px", marginBottom: "0px" }}
              >
                BST áo phao
              </h3>
              <img
                src={Collect2}
                alt="Bộ sưu tập áo phao"
                width="100%"
                loading="lazy"
                style={{
                  paddingTop: "4px",
                  height: "130px!important",
                  paddingRight: "20px",
                }}
              />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <h3
                className="upperCase"
                style={{ paddingTop: "10px", marginBottom: "0px" }}
              >
                BST áo gió
              </h3>
              <img
                src={Collect3}
                alt="Bộ sưu tập áo gió"
                width="100%"
                loading="lazy"
                style={{
                  paddingTop: "4px",
                  height: "130px!important",
                  paddingRight: "20px",
                }}
              />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <h3
                className="upperCase"
                style={{ paddingTop: "10px", marginBottom: "0px" }}
              >
                BST Polo Yody
              </h3>
              <img
                src={Collect4}
                alt="Bộ sưu tập Polo Yody"
                width="100%"
                loading="lazy"
                style={{
                  paddingTop: "4px",
                  height: "130px!important",
                  paddingRight: "20px",
                }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  const menuNew = () => {
    return (
      <div
        className={classNames({
          [className]: true,
        })}
      >
        <Row justify="space-around">
          <Col>
            <Link to="/">
              <p
                style={{
                  marginBottom: "0.5em!important",
                  color: "var(--header-menu-detail-light)",
                  fontSize: "13px",
                  marginBottom: "0.5em",
                  marginTop: "1em",
                }}
              >
                BST áo khoác yody
              </p>
            </Link>
            <Link to="/">
              <p
                style={{
                  marginBottom: "0.5em!important",
                  color: "var(--header-menu-detail-light)",
                  fontSize: "13px",
                  marginBottom: "0.5em",
                }}
              >
                BST áo khoác gió
              </p>
            </Link>
          </Col>
        </Row>
      </div>
    );
  };
  const menuLove = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
          <Col md={20}>
            <Row justify="space-around">
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15 upperCase">Yody News</h3>
                </Link>
                <Link to="/">
                  <p>Tin hot</p>
                </Link>
                <Link to="/">
                  <p>Trải nghiệm khách hàng</p>
                </Link>
                <Link to="/">
                  <p>Showroom Yody</p>
                </Link>
                <Link to="/">
                  <p>Văn hóa Yody</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Phong cách thời trang</h3>
                </Link>
                <Link to="/">
                  <p>Mix and match</p>
                </Link>
                <Link to="/">
                  <p>Mẹo hay</p>
                </Link>
                <Link to="/">
                  <p>Xu hướng thời trang</p>
                </Link>
                <Link to="/">
                  <p>Phong thủy</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">STORIES</h3>
                </Link>
                <Link to="/">
                  <p>Nhân vật</p>
                </Link>
                <Link to="/">
                  <p>Theo dòng thời trang</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Chất liệu và sản phẩm</h3>
                </Link>
                <Link to="/">
                  <p>Chất liệu</p>
                </Link>
                <Link to="/">
                  <p>Sản phẩm</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Ưu đãi</h3>
                </Link>
                <Link to="/">
                  <p>Khuyến mại</p>
                </Link>
                <Link to="/">
                  <p>Dịch vụ</p>
                </Link>
                <Link to="/">
                  <p>Chính sách</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <img
                src={Nu2}
                alt="Thời trang nữ yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  const menuEndow = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
          <Col md={10}>
            <Row justify="space-around">
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15 upperCase">mua theo giá cả</h3>
                </Link>
                <Link to="/">
                  <p>Tất cả dưới 199K</p>
                </Link>
                <Link to="/">
                  <p>Tất cả dưới 299K</p>
                </Link>
                <Link to="/">
                  <p>Tất cả dưới 399K</p>
                </Link>
                <Link to="/">
                  <p>Tất cả dưới 499K</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Yody Collection</h3>
                </Link>
                <Link to="/">
                  <p>BST áo phao</p>
                </Link>
                <Link to="/">
                  <p>Áo khoác gió</p>
                </Link>
              </Col>
              <Col>
                <Link to="/">
                  <h3 className="mb_15 mt_15">Khuyến mãi</h3>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={10} />
          <Col md={4}>
            <Row>
              <img
                src={Endow}
                alt="Thời trang nữ yody"
                width="100%"
                loading="lazy"
                style={{ paddingTop: "18px" }}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  const [isShow, setIsShow] = useState(false);
  const [isShowChild, setIsShowChild] = useState({
    visible: false,
    key: undefined,
  });

  const __handleShowMenu = () => {
    setIsShow(true);
  };
  const __handleShowMenuChild = () => {
    setIsShowChild((preState) => {
      let nextState = { ...preState };
      nextState.visible = true;
      return nextState;
    });
  };
  const onClose = () => {
    setIsShow(false);
  };
  const onCloseChild = () => {
    setIsShowChild((preState) => {
      let nextState = { ...preState };
      nextState.visible = false;
      return nextState;
    });
  };

  const menuUser = () => {
    return (
      <>
        <Link to="/login">
          <span style={{ color: "var(--body-bg)" }}>Đăng nhập</span>
        </Link>
        <br />
        <Link to="/register">
          <span style={{ color: "var(--body-bg)" }}>Đăng ký</span>
        </Link>
      </>
    );
  };

  console.log("1234", isAuthenticated);

  return (
    <div
      className={classNames({
        [className]: true,
      })}
    >
      <Drawer
        title={
          <Row justify="start" align="middle">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Mua sắm" key="1">
                <Row align="center" justify="space-between">
                  <span>Mua theo giá cả</span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Mua theo giá cả"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                  >
                    Mua theo giá cả
                  </Drawer>
                </Row>
                <Row align="center" justify="space-between">
                  <span>YODY Collection</span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="YODY Collection"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    YODY Collection
                  </Drawer>
                </Row>
                <Row align="center" justify="space-between">
                  <span>Khuyến mãi</span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Khuyến mãi"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    Khuyến mãi
                  </Drawer>
                </Row>
              </TabPane>
              <TabPane tab="Nam" key="3">
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ paddingBottom: "10px" }}
                >
                  <span>
                    <img
                      src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                      width="58px"
                      height="58px"
                      style={{ borderRadius: "50%" }}
                      loading="lazy"
                      alt=""
                    />{" "}
                    Áo
                  </span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Mua theo giá cả"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                  >
                    Mua theo giá cả
                  </Drawer>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ paddingBottom: "10px" }}
                >
                  <span>
                    <img
                      src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                      width="58px"
                      height="58px"
                      style={{ borderRadius: "50%" }}
                      loading="lazy"
                      alt=""
                    />{" "}
                    Quần
                  </span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="YODY Collection"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    Đồ mặc nhà
                  </Drawer>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ paddingBottom: "10px" }}
                >
                  <span>
                    <img
                      src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                      width="58px"
                      height="58px"
                      style={{ borderRadius: "50%" }}
                      loading="lazy"
                      alt=""
                    />{" "}
                    Đồ mặc nhà
                  </span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Khuyến mãi"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    Khuyến mãi
                  </Drawer>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ paddingBottom: "10px" }}
                >
                  <span>
                    <img
                      src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                      width="58px"
                      height="58px"
                      style={{ borderRadius: "50%" }}
                      loading="lazy"
                      alt=""
                    />{" "}
                    Đồ mặc trong
                  </span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Khuyến mãi"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    Khuyến mãi
                  </Drawer>
                </Row>
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ paddingBottom: "10px" }}
                >
                  <span>
                    <img
                      src="https://bizweb.dktcdn.net/100/438/408/collections/ao.jpg?v=1636387349187"
                      width="58px"
                      height="58px"
                      style={{ borderRadius: "50%" }}
                      loading="lazy"
                      alt=""
                    />{" "}
                    Phụ kiện
                  </span>
                  <RightOutlined onClick={() => __handleShowMenuChild()} />
                  <Drawer
                    title="Khuyến mãi"
                    width={320}
                    closable={false}
                    onClose={onCloseChild}
                    visible={isShowChild.visible}
                    closable={true}
                  >
                    Khuyến mãi
                  </Drawer>
                </Row>
              </TabPane>
              <TabPane tab="Nữ" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Trẻ em" key="5">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Bộ sưu tập" key="6">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Ưu đãi" key="7">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Row>
        }
        placement="left"
        width="80%"
        onClose={onClose}
        visible={isShow}
        closable={false}
      />
      {isMobile.any() ? (
        <Row
          className="container"
          justify="start"
          align="middle"
          style={{ paddingLeft: "10px", height: "100%", paddingRight: "0px" }}
        >
          <Col sm={4} xs={4} style={{ paddingTop: "8px" }}>
            <Link to="/">
              <img src={Yody} alt="YODY - LOOK GOOD, FEEL GOOD" height="36px" />
            </Link>
          </Col>
          <Col sm={15} xs={15} style={{ paddingTop: "8px" }}>
            <div className="header__searchbar">
              <div className="header__searchbar-main header__searchbar-main-mobile">
                <Select
                  placeholder={
                    <React.Fragment>
                      <SearchOutlined className="header__search__icon" />
                      &nbsp; Search...
                    </React.Fragment>
                  }
                  suffixIcon={false}
                >
                  <Option value={1}>Item 1</Option>
                  <Option value={2}>Item 2</Option>
                </Select>
              </div>
            </div>
          </Col>
          <Col sm={4} xs={4} style={{ paddingTop: "8px" }}>
            <Row
              type="flex"
              justify="space-around"
              style={{ marginRight: "-10px" }}
            >
              <Badge count={99}>
                <BsHandbag style={{ fontSize: "26px" }} />
              </Badge>
              <AiOutlineBars
                style={{ fontSize: "30px" }}
                onClick={__handleShowMenu}
              />
            </Row>
          </Col>
          <Col
            md={24}
            xs={24}
            style={{ height: "32px", overflow: "overlay" }}
            className="hidden__scrollbar"
          >
            <Row justify="start" align="middle" style={{ width: "550px" }}>
              <div className="header__menu-mobile active">
                <Link to="/">
                  <span>Mua sắm</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Sale upto 30%</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Nam</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Nữ</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Trẻ em</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Bộ sưu tập</span>
                </Link>
              </div>
              <div className="header__menu-mobile">
                <Link to="/">
                  <span>Ưu đãi</span>
                </Link>
              </div>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row
          className="container"
          justify="start"
          align="middle"
          style={{ paddingLeft: "10px", height: "51px", paddingRight: "0px" }}
        >
          <Col md={2}>
            <Link to="/">
              <img src={Yody} alt="YODY - LOOK GOOD, FEEL GOOD" height="36px" />
            </Link>
          </Col>
          <Col md={14} style={{ height: "100%" }}>
            <Row justify="start" align="middle">
              <div className="header__menu active">
                <Link to="/">
                  <span>Mua sắm</span>
                </Link>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuMan}
                  trigger="hover"
                  style={{ width: "80%" }}
                >
                  <Link to="/">
                    <span>Nam</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuWomen}
                  trigger="hover"
                >
                  <Link to="/">
                    <span>Nữ</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuChildren}
                  trigger="hover"
                >
                  <Link to="/">
                    <span>Trẻ em</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuCollection}
                  trigger="hover"
                >
                  <Link to="/">
                    <span>Bộ sưu tập</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuLove}
                  trigger="hover"
                >
                  <Link to="/">
                    <span>Yody love</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Popover
                  placement="bottomRight"
                  title={false}
                  content={menuEndow}
                  trigger="hover"
                >
                  <Link to="/">
                    <span>Ưu đãi</span>
                  </Link>
                </Popover>
              </div>
              <div className="header__menu">
                <Link to="/">
                  <span>Đồng phục</span>
                </Link>
              </div>
            </Row>
          </Col>
          <Col md={5}>
            <div className="header__searchbar">
              <div className="header__searchbar-main">
                <Search placeholder="Áo phao mùa đông 2021" enterButton />
              </div>
            </div>
          </Col>

          <Col md={3} style={{ paddingLeft: "24px" }}>
            <Row
              type="flex"
              justify="space-around"
              style={{ marginRight: "-20px" }}
            >
              {isAuthenticated ? (
                profile.images ? (
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <Avatar
                    icon={<AiOutlineTwitter />}
                    style={{ cursor: "pointer" }}
                  />
                )
              ) : (
                <Tooltip
                  title={menuUser}
                  color="var(--price-color)"
                  key="var(--price-color)"
                  placement="bottomRight"
                >
                  <BsPerson style={{ fontSize: "30px", cursor: "pointer" }} />
                </Tooltip>
              )}

              <BsHeart style={{ fontSize: "26px", marginTop: "3px" }} />
              <Badge count={99} style={{ marginRight: "30px" }}>
                <BsHandbag style={{ fontSize: "26px", marginRight: "30px" }} />
              </Badge>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

SubTopMenu.propTypes = {
  className: PropTypes.any,
  pathName: PropTypes.any,
};

export default memo(styled(SubTopMenu)`
  a {
    color: ${style.color.haiVan.primary};
    font-weight: bold;
    font-size: ${style.fontsize.reg};
  }
  .ant-popover-placement-bottomRight .ant-popover-arrow {
    display: none !important;
  }
  .ant-breadcrumb-separator {
    margin: 0 !important;
  }
  .header__searchbar-main svg {
    font-size: 24px;
  }
  .header__searchbar-main button {
    background: var(--price-color);
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    height: auto;
    border-radius: 0px 10px 10px 0px !important;
  }
  .header__searchbar-main input {
    border-radius: 10px 0px 0px 10px;
    line-height: 30px;
  }
  .ant-input-search .ant-input:hover,
  .ant-input-search .ant-input:focus {
    border-color: var(--price-color);
  }
  .header__search__icon svg {
    font-size: 16px;
    margin-top: -4px;
  }
  .header__searchbar-main-mobile .ant-select-selector {
    border-radius: 10px;
  }
  .hidden__scrollbar::-webkit-scrollbar {
    display: none;
  }
  .ant-drawer-header {
    padding-top: 0px !important;
  }
  .header__menu-mobile.active:after {
    display: block;
    content: " ";
    border-bottom: 3px solid var(--price-color);
    margin-bottom: -6px;
  }
  .header__menu-mobile.active a {
    color: var(--price-color) !important;
  }
`);
