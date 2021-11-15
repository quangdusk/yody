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

const Banner = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
    >
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false}
      >
        <div className="banner__image">
          <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
        </div>
        <div className="banner__image">
          <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/z2851160611933_9d276e6437c6b7892f0b8dae10694e76.jpg" />
        </div>
        <div className="banner__image">
          <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/combo_gd_2x.jpg" />
        </div>
        <div className="banner__image">
          <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/ra_mat_ao_gio_web_2x.jpg" />
        </div>
        <div className="banner__image">
          <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/black1920x650.jpg" />
        </div>
      </Carousel>
      <div className="container" style={{height: "116px"}}>
        <Row justify="space-between" align="middle" style={{height: "100%"}}>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src={FreeShip} />
              </Col>
              <Col md={18}>
                <p className="home-policy-title">Miễn phí giao hàng</p>
                <p className="home-policy-description">Miễn phí ship với đơn hàng &gt; 498K</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src={Wallet} />
              </Col>
              <Col md={18}>
                <p className="home-policy-title">Thanh toán COD</p>
                <p className="home-policy-description">Thanh toán khi nhận hàng (COD)</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src={Vip} />
              </Col>
              <Col md={18}>
                <p className="home-policy-title">Khách hàng VIP</p>
                <p className="home-policy-description">Ưu đãi dành cho khách hàng VIP</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src={Sew} />
              </Col>
              <Col md={18}>
                <p className="home-policy-title">Hỗ trợ bảo hành</p>
                <p className="home-policy-description">Đổi, sửa đồ tại tất cả store YODY</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default styled(Banner)`
  .carousel.carousel-slider,
  .control-arrow:hover {
    background: transparent !important;
  }
  p {
    margin: 0
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
