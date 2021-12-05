import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import BackDot from "images/back_dot.png";
import Promotion from "images/promotion.jpg";
import { $LocalStorage } from "utils/localStorage";
import BGSALE from "images/bg_flash.jpg";
import { BsFillLightningFill } from "react-icons/bs";
import FlashBanner from "images/flash_banner.png";

const FlashSale = memo(({ className }) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  let countDownDate = new Date("Dec 30 2021 15:37:25").getTime();
  $LocalStorage.sls.setObject("countDownTime", countDownDate);
  //Nếu có localstorage thì không gọi api

  useEffect(() => {
    setInterval(function() {
      let now = new Date().getTime();
      let distance = $LocalStorage.sls.getObject("countDownTime") - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    }, 1000);
    return () => clearInterval(setInterval);
  }, []);
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
        paddingBottom: "70px",
      }}
    >
      <div className="banner__sale">
        <div className="container">
          <h3>Flash Sale</h3>
          <Row>
            <Col md={6}>
              <div
                className="banner__sale-left"
                style={{ background: `url(${BGSALE})` }}
              >
                <h2>FLASH SALE</h2>
                <BsFillLightningFill />
                <p>Kết thúc sau</p>
                <div className="banner__sale-countdown">
                  <Row justify="center">
                    <span>{hour}</span>
                    <span>:</span>
                    <span>{minute}</span>
                    <span>:</span>
                    <span>{second}</span>
                  </Row>
                </div>
                <img src={FlashBanner} alt="Yody flash sale" />
                <Row
                  className="banner__sale-button"
                  align="middle"
                  justify="center"
                >
                  <Button>Xem tất cả</Button>
                </Row>
              </div>
            </Col>
            <Col md={20} />
          </Row>
          {/* <Row align="middle">
            <Col md={10}>
              <Row>
                <h3 className="upperCase" style={{paddingLeft: "18px"}}>Thời gian còn lại</h3>
              </Row>
              <Row style={{maxWidth: "300px"}}>
                <Col className="banner__sale-time" md={6}><p>{day}</p><a>Ngày</a></Col>
                <Col className="banner__sale-time" md={6}><p>{hour}</p><a>Giờ</a></Col>
                <Col className="banner__sale-time" md={6}><p>{minute}</p><a>Phút</a></Col>
                <Col className="banner__sale-time" md={6}><p>{second}</p><a>Giây</a></Col>
              </Row>
              <Row className="banner__sale-button">
                <Button>Xem thêm</Button>
              </Row>
            </Col>
            <Col md={14} className="promotion-img">
              <img src={Promotion} loading="lazy" sizes="670px" data-sizes="auto" />
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
});

export default styled(FlashSale)`
.banner__sale {
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 0;
}
.banner__sale h3 {
  font-size: 18px;
  color: var(--price-color);
  text-transform: upperCase;
  text-align: center;
  padding-top: 10px;
  font-weight: 700;
}
h3 {
  font-size: 30px;
  font-weight: 500;
}
p {
  color: var(--text-color);
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
}
.banner__sale-time {
  text-align: center;
}
a, a:hover {
  color: var(--header-menu-detail-light);
  cursor: default;
}
.promotion-img {
  min-height: 250px;
  max-width: calc(100% - 470px);
  alt="BLACK FRIDAY 2021"
}
.promotion-img img {
  max-width: 100%;
  opacity: 1;
  transition: 0.2s;
  vertical-align: middle;
  border-style: none;
}
.banner__sale-button {
  padding: 20px 0px 0px 20px;
}
.banner__sale-button button{
  background: var(--yellow-color);
  color: var(--body-bg);
  padding: 10px 30px;
  font-size: 17px;
  font-weight: 500;
  height: 50px;
  width: 150px;
}
.banner__sale-button:after {
  border-right: 3px solid var(--yellow-color);
  content: "";
  padding-left: 2px;
}
.banner__sale-left h2 {
  text-transform: uppercase;
  color: var(--body-bg);
  font-size: 30px!important;
  text-align: center;
  font-weight: 600;
  padding-top: 30px;
}
.banner__sale-left svg {
  margin: auto;
  color: var(--body-bg);
  font-size: 60px;
  text-align: center;
  width: 100%;
}
.banner__sale-left p {
  font-size: 16px;
  color: var(--body-bg);
  padding-top: 40px;
  text-align: center;
  padding-bottom: 35px;
}
.banner__sale-countdown {
  padding-bottom: 25px;
}
.banner__sale-countdown span {
  font-size: 30px;
  text-align: center;
  color: var(--body-bg);
}
.banner__sale-countdown span:nth-child(2n + 1) {
  border: 1px solid var(--body-bg);
  padding: 5px 10px;
  min-width: 60px;
}
.banner__sale-countdown span:nth-child(2n) {
  padding: 5px;
}
.banner__sale-button button {
  background: var(--body-bg);
  color: var(--price-color);
  width: 100%;
  border: 1px solid var(--price-color);
  border: 5px;
}
`;
