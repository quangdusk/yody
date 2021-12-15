import { Row, Button } from "antd";
import "antd/dist/antd.css";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";
import Slide from "./Slide";

const Love = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
      style={{
        background: "var(--body-bg)",
        position: "relative",
        paddingBottom: "30px",
      }}
    >
      <div className="container">
        <h3 style={{ color: "var(--price-color)" }}>YODYLOVE</h3>
        <Slide count={5} />
        <Row className="banner__sale-button" align="middle" justify="center">
          <Button>Xem thêm</Button>
        </Row>
      </div>
    </div>
  );
});

export default styled(Love)`
  .container h3 {
    text-align: center;
    text-transform: uppercase;
    padding-top: 50px;
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 20px;
  }
  .banner__sale-button button {
      height: 50px;
      width: 285px;
      background: var(--price-color);
      color: var(--body-bg);
      border: 1px solid var(--price-color);
      font-size: 18px;
      font-weight: 600;
      margin-top: 30px;
  }
  .banner__sale-button button:hover {
    background: var(--body-bg);
    color: var(--price-color);
  }
`;
