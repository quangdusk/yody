import { Row, Col, Button, Tabs, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import banner_hangngay_1 from "images/banner_hangngay_1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOKHOAC1 from "images/AOKHOAC1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsHeart, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Slide = memo(({ className, count }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="nextArrow">
        <BsArrowRightShort
          onClick={onClick}
          style={{ ...style, display: "block" }}
          className="nextArrowItem"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="prevArrow">
        <BsArrowLeftShort
          onClick={onClick}
          style={{ ...style, display: "block" }}
          className="prevArrowItem"
        />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: count ? count : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: count ? count - 1 : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: count ? count - 2 : 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
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
        background: "var(--body-grey)",
        position: "relative",
        paddingBottom: "30px",
      }}
    >
      <Slider {...settings}>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-status">
              <div className="ribbon up">
                <div className="content">-10%</div>
              </div>
              <div className="ribbon_new up">
                <div className="content">Mới</div>
              </div>
            </div>
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
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
                width={count ? "190px" : "255px"}
                height={count ? "250px" : "380px"}
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
                  xs={9}
                  sm={9}
                  lg={9}
                  md={9}
                >
                  399,000đ
                </Col>
                <Col
                  className="product__carousel-footer-price"
                  xs={15}
                  sm={15}
                  lg={15}
                  md={15}
                >
                  549,000đ
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
});

export default styled(Slide)`
  .content {
    font-weight: 600;
  }
  .product__carousel-image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
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
    padding: 0px 5px;
  }
  .product__carousel-footer p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 0px 2px 0px;
    margin-bottom: 0px;
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
    padding-left: 0px!important;
  } 
  .slick-slide:nth-child(6) .product__carousel__container {
    padding-right: 0px!important;
  } 
  .product__carousel-footer:hover p {
    cursor: pointer;
    color: var(--price-color);
  }
  .prevArrow, .nextArrow {
    position: absolute;
    z-index: 10;
    top: 35%;
    font-size: 30px;
    border-radius: 50%;
    background: var(--progress-color-light);
    color: var(--progress-color);
    display: none;
    cursor: pointer;
  }
  .nextArrow {
    right: 10px;
  }
  .prevArrow {
    left: 10px;
  }
  .slick-slider:hover .nextArrow, .slick-slider:hover .prevArrow {
    display: block;
  }
  .slick-slider:hover .nextArrow {
    animation: animateRight 1s;
  }
  .slick-slider:hover .prevArrow {
    animation: animateLeft 1s;
  }
`;
