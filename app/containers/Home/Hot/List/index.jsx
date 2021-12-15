import { Row, Col } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import AOKHOAC1 from "images/AOKHOAC1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import { Button } from "antd/lib/radio";

const List = memo(({ className, count }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="nextArrow">
        <AiOutlineRight
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
        <AiOutlineLeft
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
      <Row>
        <Col md={20}>
          <Slider {...settings}>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
            <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
              <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
            <img src={AOKHOAC1} alt="" />
            </Button>
            <Button type="link">
            <img src={AOKHOAC1} alt="" />
            </Button>
          </Slider>
        </Col>
      </Row>
    </div>
  );
});

export default styled(List)`
  .product__carousel {
    position: relative;
    margin-top: 10px;
    margin-left: 10px;
  }
  .product__carousel-image img {
    background: var(--header-menu-detail-light);
    cursor: pointer;
  }
  .product__carousel-status {
    position: absolute;
    z-index: 10;
  }
  .ribbon {
    width: 110px;
    height: 110px;
    overflow: hidden;
    position: absolute;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #ff7d01;
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 5px 0;
    background-color: var(--yellow-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }

  .ribbon-top-left {
    top: -10px;
    left: -10px;
  }
  .ribbon-top-left::before,
  .ribbon-top-left::after {
    border-top-color: transparent;
    border-left-color: transparent;
  }
  .ribbon-top-left::before {
    top: 0;
    right: 18px;
  }
  .ribbon-top-left::after {
    bottom: 18px;
    left: 0;
  }
  .ribbon-top-left span {
    right: -40px;
    top: 20px;
    transform: rotate(-45deg);
  }
  .sample {
    position: absolute;
    top: 0;
    right: 30px;
  }

  .sample-ribbon {
    position: absolute;
    right: 0;
    top: 0;
    filter: drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.5));
    > .content {
      color: white;
      font-size: 1.25rem;
      text-align: center;
      font-weight: 400;
      background: var(--yellow-color)
        linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(1, 1, 1, 0.25) 100%);
      padding: 8px 2px 4px;
      width: 100%;
      min-height: 100%;
      transition: clip-path 1s, padding 1s, background 1s;
    }
    &.down > .content {
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 8px),
        50% 100%,
        0 calc(100% - 8px)
      );
    }
  }
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    z-index: 10;
  }
  .slick-arrow.slick-prev {
    margin-left: 25px;
  }
  .slick-arrow.slick-next {
    margin-right: 50px;
  }
  .slick-prev:before,
  .slick-next:before {
    margin: auto;
    font-size: 40px;
  }
  .prevArrow,
  .nextArrow {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 100;
    top: 35%;
    background: #8080807a;
    display: flex;
    cursor: pointer;
  }
  .nextArrow {
    right: -16px;
  }
  .prevArrow {
    left: -16px;
  }
  .nextArrowItem,
  .prevArrowItem {
    color: #ffffff80;
    font-size: 40px;
    margin: auto;
  }
  .nextArrowItem:hover,
  .prevArrowItem:hover {
    color: var(--body-bg);
  }
  .product__carousel-footer {
    font-size: 18px;
  }
  .product__carousel-footer p {
    font-size: 1rem;
    font-weight: 400;
    width: 92%;
    padding-top: 20px;
    text-transform: capitalize;
  }
  .product__carousel-footer-discount {
    font-weight: 600;
    color: var(--price-color);
  }
  .product__carousel-footer-price {
    text-decoration: line-through;
    color: var(--header-menu-detail-light);
    font-weight: 500;
  }
  .product__carousel-image {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .product__carousel-action {
    position: absolute;
    bottom: 0;
    background: var(--blue-color-tranparent);
    width: 255px;
    height: 45px;
    color: var(--body-bg);
    display: none;
    animation-name: carousel_status;
    animation-duration: 0.5s;
  }
  .product__carousel-action .ant-row .ant-col span {
    font-weight: 400;
  }
  .product__carousel-image:hover .product__carousel-action {
    display: block;
    cursor: poiter;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
