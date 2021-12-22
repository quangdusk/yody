import { Row, Col, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import FreeShip from "images/free_ship.png";
import Sew from "images/sew.png";
import Vip from "images/vip.png";
import Wallet from "images/wallet.png";
import BannerKm from "images/banner_km.jpg"

const Banner = memo(({ className }) => {
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
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{ background: "var(--body-bg)" }}
    >
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div className="banner__image">
          <img
            loading="lazy"
            src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg"
          />
        </div>
        <div className="banner__image">
          <img
            loading="lazy"
            src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/z2851160611933_9d276e6437c6b7892f0b8dae10694e76.jpg"
          />
        </div>
        <div className="banner__image">
          <img
            loading="lazy"
            src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/combo_gd_2x.jpg"
          />
        </div>
        <div className="banner__image">
          <img
            loading="lazy"
            src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/ra_mat_ao_gio_web_2x.jpg"
          />
        </div>
        <div className="banner__image">
          <img
            loading="lazy"
            src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/black1920x650.jpg"
          />
        </div>
      </Carousel>
      
      {isMobile.any() ? (
        <img src={BannerKm} alt="Yody miễn phí ship hàng" width="100%"/>
      ) : (
        <div className="container" style={{ height: "116px" }}>
          <Row
            justify="space-between"
            align="middle"
            style={{ height: "100%" }}
          >
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img src={FreeShip} loading="lazy" />
                </Col>
                <Col md={18}>
                  <p className="home-policy-title">Miễn phí giao hàng</p>
                  <p className="home-policy-description">
                    Miễn phí ship với đơn hàng &gt; 498K
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img src={Wallet} loading="lazy" />
                </Col>
                <Col md={18}>
                  <p className="home-policy-title">Thanh toán COD</p>
                  <p className="home-policy-description">
                    Thanh toán khi nhận hàng (COD)
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img src={Vip} loading="lazy" />
                </Col>
                <Col md={18}>
                  <p className="home-policy-title">Khách hàng VIP</p>
                  <p className="home-policy-description">
                    Ưu đãi dành cho khách hàng VIP
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img src={Sew} loading="lazy" />
                </Col>
                <Col md={18}>
                  <p className="home-policy-title">Hỗ trợ bảo hành</p>
                  <p className="home-policy-description">
                    Đổi, sửa đồ tại tất cả store YODY
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
});

export default styled(Banner)`
  .carousel.carousel-slider,
  .control-arrow:hover {
    background: transparent !important;
  }
  p {
    margin: 0;
  }
  .home-policy-title {
    font-weight: 600;
  }
  .home-policy-description {
    font-size: 12px;
    padding-top: 2px;
    font-weight: 400;
  }
`;
