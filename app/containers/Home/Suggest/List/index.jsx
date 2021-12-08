import { Row, Col, Progress, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import { BsHeart } from "react-icons/bs";
import FireIcon from "images/free_ship.png";
import AOKHOAC1 from "images/AOKHOAC1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Suggest = memo(({ className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
      }}
    >
      <div className="container">
        <Row>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
                <Row className="product__carousel-option">
                  <img
                    loading="lazy"
                    src={AOKHOAC1}
                    alt="Khuyến mãi hot của yody"
                    width="190px"
                    height="310px"
                  />
                  <img
                    loading="lazy"
                    src={AOKHOAC2}
                    alt="Khuyến mãi hot của yody"
                    width="190px"
                    height="310px"
                  />
                </Row>
                {/* <Row className="product__carousel-option">
                  <Slider {...settings}>
                    <div className="product__carousel-option-icon">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        width="190px"
                        height="310px"
                      />
                    </div>
                  </Slider>
                </Row> */}
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
          <Col>
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
                    height="310px"
                  />
                </div>
                <div className="product__carousel-love">
                  <BsHeart />
                </div>
                <div className="product__carousel-hot">
                  <img src={FireIcon} alt="Sản phẩm hot của Yody" />
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
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default styled(Suggest)`
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
  .product__carousel {
    max-width: 230px;
    padding-bottom: 30px;
  }
  .product__carousel-image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    height: 310px;
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
  .product__carousel-footer:hover p {
    cursor: pointer;
    color: var(--price-color);
  }
  .product__carousel-footer span {
    font-size: 12px;
    color: var(--body-bg);
  }
  .product__carousel-option img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;
  }
`;
