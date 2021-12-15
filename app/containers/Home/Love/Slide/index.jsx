import { Row, Col, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOKHOAC1 from "images/AOKHOAC1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import { BsHeart, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ClockCircleOutlined } from "@ant-design/icons";

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
    >
      <Slider {...settings}>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="product__carousel__container">
            <div className="product__carousel-image">
              <img
                loading="lazy"
                src={AOKHOAC1}
                alt="Khuyến mãi hot của yody"
                width={count ? "230px !important" : "255px"}
                height={count ? "180px!important" : "380px"}
              />
            </div>
            <div className="product__carousel-footer">
              <Tooltip title="Cách áp dụng mã giảm giá 20K trên website Yody nhanh nhẩt">
                Cách áp dụng mã giảm giá 20K trên website YODY.vn nhanh nhẩt
              </Tooltip>
              <p style={{ color: "#7A7A9D", lineHeight: "16px" }}>
                1. Thông tin về chương trình tặng mã giảm giá 20K Để mang đến
                nhiều quyền lợi hơn cho khách hàng
              </p>
              <Row justify="start" align="middle">
                <ClockCircleOutlined />
                <span>29/11/2021</span>
              </Row>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
});

export default styled(Slide)`
  .product__carousel {
    background: var(--body-grey);
    width: 226px !important;
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
  }
  .product__carousel-footer {
    padding: 10px;
  }
  .product__carousel-footer p {
    display: -webkit-box;
    padding: 3px 0px 0px 0px;
    margin-bottom: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 52px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .product__carousel-footer:hover p {
    cursor: pointer;
    color: var(--price-color);
  }
  .prevArrow,
  .nextArrow {
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
    right: 24px;
  }
  .prevArrow {
    left: 10px;
  }
  .slick-slider {
      padding: 0px 6px;
  }
  .slick-slider:hover .nextArrow,
  .slick-slider:hover .prevArrow {
    display: block;
  }
  .slick-slider:hover .nextArrow {
    animation: animateRight 1s;
  }
  .slick-slider:hover .prevArrow {
    animation: animateLeft 1s;
  }
  .product__carousel-footer svg {
    margin-right: 10px;
  }
  .product__carousel-footer .ant-row span {
    color: var(--border-color);
    padding-top: 3px;
  }
  .product__carousel-footer > span {
    line-height: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 34px;
    max-height: 52px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
