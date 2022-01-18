/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import styled from "styled-components";
import classNames from "classnames";
import _ from "lodash";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuLayout = memo(({ className, appConfig, collapsed }) => {
  return (
    <div
      className={classNames({
        [className]: true,
      })}
    >
      <div className="top-menu">
        <Row
          align="middle"
          justify="start"
          style={{ maxWidth: "770px", margin: "auto", height: "100%", padding: "10px" }}
        >
          <FontAwesomeIcon icon={faBars} style={{ width: "24px", height: "24px"}} />
          <span>Ang propesiya ni Mr. Hanzcua</span>
        </Row>
      </div>
    </div>
  );
});
export default styled(MenuLayout)`
  .top-menu {
    background: #239dad none repeat scroll 0% 0%;
    height: 56px;
    color: #fff;
  }
  .top-menu span {
      font-size: 24px;
      padding-left: 20px;
      letter-spacing: 0,5px;
  }
`;
