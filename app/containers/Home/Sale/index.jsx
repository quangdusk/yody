import { Row, Col, Tooltip } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { AiOutlineCaretLeft } from "react-icons/ai";
import _ from "lodash";


const Banner = memo(({ className }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
    >
      
    </div>
  );
});

export default styled(Banner)`
  .carousel.carousel-slider,
  .control-arrow:hover {
    background: transparent !important;
  }
  p {
    margin: 0
  }
  .home-policy-title {
    font-weight: 600;
  }
  .home-policy-description {
    font-size: 12px;
    padding-top: 2px;
    font-weight: 400;
  }
`;
