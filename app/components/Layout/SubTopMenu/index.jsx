/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import React, { memo } from "react";
import styled from "styled-components";
import { Breadcrumb, Col, Popover, Row } from "antd";
import { Link } from "react-router-dom";
import { defineMessages, FormattedMessage } from "react-intl";
import * as style from "components/Variables";
import { AiOutlineLine } from "react-icons/ai";
import Slider from "react-slick";
const prefix = "app.routing.";
function Footer({ className, pathName }) {
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
      </>
    );
  };
  const menuMan = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
          <Col>
            <Link to="/">
              <h3 className="mb_15 mt_15">Áo nam</h3>
            </Link>
            <Link to="/">
              <p>Áo polo nam Yody</p>
            </Link>
            <Link to="/">
              <p>Áo thun nam/ Áo phông nam</p>
            </Link>
            <Link to="/">
              <p>Áo khoác nam</p>
            </Link>
            <Link to="/">
              <p>Áo sơ mi nam</p>
            </Link>
            <Link to="/">
              <p>Áo vest nam</p>
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <h3 className="mb_15 mt_15">Quần nam</h3>
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
              <h3 className="mb_15 mt_15">Đồ mặc nhà nam</h3>
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
              <h3 className="mb_15 mt_15">Phụ kiện nam</h3>
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
      </>
    );
  };
  const menuChildren = () => {
    return (
      <>
        <Row justify="space-around" className="header__menu-detail">
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
      </>
    );
  };
  const menuNew = () => {
    return (
      <>
        <Row justify="space-around">
          <Col>
            <Link to="/">
              <p
                style={{
                  marginBottom: "0.5em!important",
                  color: "var(--header-menu-detail-light)",
                  fontSize: "13px",
                  marginBottom: "0.5em",
                  marginTop: "1em"
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
                  marginBottom: "0.5em"
                }}
              >
                BST áo khoác gió
              </p>
            </Link>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div style={{ background: "rgb(238, 238, 238)" }}>
      <Row
        className="container"
        justify="start"
        align="middle"
        style={{ paddingLeft: "15px", height: "56px" }}
      >
        <Breadcrumb
          className={className}
          separator={
            <AiOutlineLine
              style={{ transform: "rotate(90deg)", fontSize: "24px" }}
            />
          }
        >
          <Breadcrumb.Item className="header__menu header__menu-first">
            <Link to="/">
              <span>Trang chủ</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
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
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
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
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
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
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
            <Link to="/">
              <span>Đồng phục</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
            <Link to="/">
              <span>Polo Yody</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
            <Link to="/">
              <span>Ưu đãi</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="header__menu">
            <Popover
              placement="bottomRight"
              title={false}
              content={menuNew}
              trigger="hover"
            >
              <Link to="/">
                <span>Sp thu đông 2021</span>
              </Link>
            </Popover>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.any,
  pathName: PropTypes.any,
};

export default memo(styled(Footer)`
  padding: 1rem 0 1rem 0;
  a {
    color: ${style.color.haiVan.primary};
    font-weight: bold;
    font-size: ${style.fontsize.reg};
  }
  a:hover {
    color: ${style.color.haiVan.bg} !important;
  }
`);
