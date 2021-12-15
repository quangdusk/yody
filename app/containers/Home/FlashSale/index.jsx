import { Row, Col, Button, Tooltip, Progress } from "antd";
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
import AOKHOAC1 from "images/AOKHOAC1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import { BsHeart } from "react-icons/bs";
import FireIcon from "images/free_ship.png";

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
        paddingBottom: "40px",
      }}
    >
      <div className="banner__sale">
        <div className="container">
          <h3>Flash Sale</h3>
          <Row>
            <Col md={6} style={{ paddingRight: "10px" }}>
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
            <Col md={18}>
              <Row>
                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src={FireIcon}
                        // src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={90} format={() => "Sắp bán hết"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="product__carousel">
                  <div className="product__carousel__container">
                    <div className="product__carousel-status">
                      <div className="ribbon_new up">
                        <div className="content">Mới</div>
                      </div>
                      <div className="ribbon up">
                        <div className="content">-10%</div>
                      </div>
                    </div>

                    <div className="product__carousel-image">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="250px"
                      />
                    </div>
                    <div className="product__carousel-love">
                      <BsHeart />
                    </div>
                    <div className="product__carousel-hot">
                      <img
                        src="https://bizweb.dktcdn.net/100/438/408/themes/843441/assets/hotico.svg?1638341344437"
                        alt="Sản phẩm hot của Yody"
                      />
                    </div>
                    <div className="product__carousel-footer">
                      <Tooltip title="Áo khoác gió nam thể thao phối lưng">
                        <p>Áo khoác gió nam thể thao phối lưng</p>
                      </Tooltip>
                      <Row>
                        <Col
                          className="product__carousel-footer-discount"
                          xs={10}
                          sm={10}
                          lg={10}
                          md={10}
                        >
                          399,000đ
                        </Col>
                        <Col
                          className="product__carousel-footer-price"
                          xs={14}
                          sm={14}
                          lg={14}
                          md={14}
                        >
                          549,000đ
                        </Col>
                      </Row>
                      <Row className="product__carousel-footer-progress">
                        <div className="fire_icon">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                            alt="Sản phẩm hot"
                            width="25px"
                          />
                        </div>
                        <Progress percent={30} format={() => "Đang diễn ra"} />
                      </Row>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
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
  a,
  a:hover {
    color: var(--header-menu-detail-light);
    cursor: default;
  }
  .banner__sale-button {
    padding: 10px 20px;
  }
  .banner__sale-button button {
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
    font-size: 30px !important;
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

  .product__carousel {
    max-width: 180px;
    padding-bottom: 30px;
  }
  .product__carousel-image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 215px;
  }
  .product__carousel-image:hover img {
    transform: scale(1.2);
    transition-duration: 1s;
  }
  .product__carousel-image img {
    transition-duration: 1s;
    width: 100%;
  }
  .product__carousel-status {
    position: absolute;
    z-index: 10;
  }
  .product__carousel__container {
    padding: 0px 10px;
  }
  .product__carousel-footer p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 0px 2px 0px;
    margin-bottom: 0px;
    font-size: 15px;
  }
  .product__carousel-love {
    width: 26px;
    height: 26px;
    background: var(--body-bg);
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    top: 10px;
    right: 20px;
    display: flex;
  }
  .product__carousel-love svg {
    font-size: 16px;
    margin: auto;
    padding-top: 2px;
  }
  .product__carousel-hot {
    position: absolute;
    top: 40px;
    right: 18px;
  }
  .product__carousel-hot img {
    width: 30px;
  }
  .product__carousel-footer-price {
    text-decoration: line-through;
  }
  .slick-slide:nth-child(1) .product__carousel__container {
    padding-left: 0px !important;
  }
  .slick-slide:nth-child(6) .product__carousel__container {
    padding-right: 0px !important;
  }
  .product__carousel-footer:hover p {
    cursor: pointer;
    color: var(--price-color);
  }
  .product__carousel-footer-progress .ant-progress-bg {
    height: 22px !important;
    padding: 5px 0px;
  }
  .product__carousel-footer-progress .ant-progress-outer {
    padding: 5px 0px;
  }
  .product__carousel-footer-progress .ant-progress-text {
    position: absolute;
    z-index: 5;
    width: 100%;
    left: 0;
    text-align: center;
    margin-top: 11px;
  }
  .product__carousel-footer span {
    font-size: 12px;
    color: var(--body-bg);
  }
  .ant-progress-bg {
    background-color: var(--progress-color);
  }
  .ant-progress-inner {
    background-color: var(--progress-color-light);
  }
  .product__carousel-footer-progress .fire_icon {
    position: absolute;
    z-index: 10;
  }
  .product__carousel-footer-progress .fire_icon img {
    margin-left: 5px;
  }
`;
