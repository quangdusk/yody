import { Row, Col, Progress, Tooltip, Button } from "antd";
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
  const [image, setImage] = useState({
    url: undefined,
    key: undefined
  });
  const __handleChangeImage = (image, key) => {
    setImage((preState) => {
      let nextState = {...preState}
      nextState.url = image
      nextState.key = key
      return nextState
    });
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
        <Row justify="space-between">
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
                    src={image.key == 1 ? image.url : AOKHOAC1}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC2, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 1)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 1)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 2 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 2)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 2)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 3 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 3)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 3)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 4 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 4)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 4)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 5 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 5)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 5)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 7 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 7)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 7)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 8 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 8)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 8)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 9 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 9)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 9)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 10 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 10)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 10)}
                      />
                    </Button>
                  </Slider>
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
                    src={image.key == 11 ? image.url : AOKHOAC2}
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
                <div className="product__carousel-option">
                  <Slider {...settings}>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC2}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC3}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC3, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC4}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC4, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC5}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC5, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC6}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC6, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 11)}
                      />
                    </Button>
                    <Button type="link">
                      <img
                        loading="lazy"
                        src={AOKHOAC1}
                        alt="Khuyến mãi hot của yody"
                        onClick={() => __handleChangeImage(AOKHOAC1, 11)}
                      />
                    </Button>
                  </Slider>
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
    overflow: hidden;
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
  .product__carousel-option {
    margin-left: -15px;
  }
  .product__carousel-option img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;
  }
`;
