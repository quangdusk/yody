import { Row, Col, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import BackDot from "images/back_dot.png";

let time = null;

const Sale = memo(({ className }) => {
  let countDownDate = new Date("Nov 17 2021 15:37:25").getTime();
  let days = 0, hours = 0, minutes = 0, seconds = 0
  const setTime = async () => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(setTime, 100);
  }, [setTime])
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{ background: "var(--body-bg)", position: "relative" }}
    >
      <div
        style={{
          width: "280px",
          height: "280px",
          backgroundImage: `url(${BackDot})`,
        }}
      />
      <div className="banner__sale">
        <div className="container">
          <Row>
            <Col md={10}>
              <Row>
                <h3 className="upperCase" style={{paddingLeft: "20px"}}>Thời gian còn lại</h3>
              </Row>
              <Row style={{maxWidth: "300px"}}>
                <Col className="banner__sale-time" md={6}><p>{days}</p><a>Ngày</a></Col>
                <Col className="banner__sale-time" md={6}><p>{hours}</p><a>Giờ</a></Col>
                <Col className="banner__sale-time" md={6}><p>{minutes}</p><a>Phút</a></Col>
                <Col className="banner__sale-time" md={6}><p>{seconds}</p><a>Giây</a></Col>
              </Row>
            </Col>
            <Col md={14}>2</Col>
          </Row>
        </div>
      </div>
    </div>
  );
});

export default styled(Sale)`
.banner__sale {
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 0;
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
`;
