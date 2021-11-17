import { Tabs } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeftSquare, AiOutlineRightSquare } from "react-icons/ai";

const List = memo(({ className }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <div className="product__carousel-status">
            <div className="ribbon ribbon-top-left">
              <span>-25%</span>
            </div>
            <div className="sample">
              <div className="sample-ribbon down" style={{ color: "#fd9c2e" }}>
                <div className="content">Mới</div>
              </div>
            </div>
          </div>
          <div className="product__carousel-image">
            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
          </div>
          <div className="product__carousel-action" />
        </div>
        <div className="product__carousel">
          <div className="product__carousel-status" />
          <div className="product__carousel-image">
            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
          </div>
          <div className="product__carousel-action" />
        </div>
        <div className="product__carousel">
          <div className="product__carousel-status" />
          <div className="product__carousel-image">
            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
          </div>
          <div className="product__carousel-action" />
        </div>
        <div className="product__carousel">
          <div className="product__carousel-status" />
          <div className="product__carousel-image">
            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
          </div>
          <div className="product__carousel-action" />
        </div>
        <div className="product__carousel">
          <div className="product__carousel-status" />
          <div className="product__carousel-image">
            <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/fbfbe175f6de3f8066cf.jpg" />
          </div>
          <div className="product__carousel-action" />
        </div>
      </Slider>
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
    width: 255px;
    height: 380px;
  }
  .product__carousel-status {
    position: relative;
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
`;
