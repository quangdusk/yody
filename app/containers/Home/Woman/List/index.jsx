import { Row, Col, Button } from "antd";
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
import BannerNu1 from "images/BannerNu1.jpg";
import AOKHOAC2 from "images/AOKHOAC2.jpg";
import AOKHOAC3 from "images/AOKHOAC3.jpg";
import AOKHOAC4 from "images/AOKHOAC4.jpg";
import AOKHOAC5 from "images/AOKHOAC5.jpg";
import AOKHOAC6 from "images/AOKHOAC6.jpg";
import ListProduct from "../../Hot/List";

const List = memo(({ className }) => {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      style={{ position: "relative" }}
    >
      <div className="women" style={{ background: `url(${BannerNu1})` }} />
      <div className="product-hot">
        <h3 className="uppercase">Sản phẩm hot</h3>
        <ListProduct count={3} />
        <Row className="banner__sale-button" align="middle" justify="center">
          <Button>Xem thêm</Button>
        </Row>
      </div>
    </div>
  );
});

export default styled(List)`
  .container {
    padding-left: 15px;
  }
  .women {
    min-height: 800px;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat !important;
  }
  .product-hot {
    width: 67%;
    position: absolute;
    right: 0;
    box-shadow: 0 0 1px 1px var(--border-color);
    top: 52%;
    transform: translateY(-50%);
    z-index: 3;
    border: 1px solid var(--border-color);
    background: var(--body-bg);
    padding: 0px 20px;
  }
  .product-hot h3 {
    padding-top: 30px !important;
  }
  .banner__sale-button {
    padding: 20px 0px 30px 20px;
  }
  .banner__sale-button button{
    background: var(--yellow-color);
    color: var(--body-bg);
    padding: 5px 10px;
    font-size: 17px;
    font-weight: 500;
    height: 40px;
    width: 110px;
  }
`;
