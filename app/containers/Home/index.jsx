/* eslint-disable no-underscore-dangle */
/**
 *
 * SignIn
 *
 */

import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { makeSelectIsAuthenticated } from "containers/App/selectors";
import { setAuthenticated, setEntry } from "containers/App/actions";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import HomePicture from "images/home.jpg";
import _ from "lodash";
import { Button, Form, Input, Select } from "antd";
const Home = ({ className, isAuthenticated, setAuthenticated }) => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(true);
  };
  return (
    <div className={className} style={{ background: "#d3d4df" }}>
      <div className="home">
        <h1>Paunawa!</h1>
        <img src={HomePicture} alt={HomePicture} width="100%" />
        <span className="home-description">
          Ang hula ng horoscope na ito ay nananatiling pinaka-tatagong lihim!
          Nagpasya si Mr. Hanzcua na ang kanyang talento ay hindi dapat
          masayang, kaya't tinulungan niya ang mga taong mula pa sa malalayong
          lugar. Ang mga taong ito ay naninirahan sa iba't ibang lugar sa buong
          bansa at sa buong mundo at hindi sila madalas magkaroon ng
          pagkakataong makita siya nang personal. Kailangan lamang ni Mr.
          Hanzcua ng kaunting impormasyon upang mabasa at mahulaan ang iyong
          kapalaran. Ito ay LIBRE!
        </span>
        <div style={{ paddingTop: "26px", textAlign: "center" }}>
          <h3 style={{ paddingBottom: "10px" }}>
            Alamin ang iyong horoscope para sa 2022!
          </h3>
          {isShow ? (
            <div className="home-form">
              <Form
                wrapperCol={{
                  span: 24,
                }}
                layout="horizontal"
                size="large"
              >
                <Form.Item>
                  <Input placeholder="Pangalan" />
                </Form.Item>
                <Form.Item>
                  <Select defaultValue={0}>
                    <Select.Option value={0}>Taon ng kapanganakan</Select.Option>
                    <Select.Option value={1}>2000</Select.Option>
                    <Select.Option value={2}>1999</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select defaultValue={0}>
                    <Select.Option value={0}>Buwan ng Kapanganakan</Select.Option>
                    <Select.Option value={1}>2000</Select.Option>
                    <Select.Option value={2}>1999</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select defaultValue={0}>
                    <Select.Option value={0}>Araw ng kapanganakann</Select.Option>
                    <Select.Option value={1}>2000</Select.Option>
                    <Select.Option value={2}>1999</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <Button onClick={handleShow}>Kunin ang iyong mga hula</Button>
          )}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setAuthenticated,
    },
    dispatch
  );
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(
  withConnect,
  memo
)(styled(Home)`
  .home {
    max-width: 770px;
    margin: auto;
    border: 1px solid #ccc;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px 12px;
    background: #ffffff;
    img {
      padding-bottom: 10px;
    }
    span.home-description {
      font-weight: 400;
      text-transform: none;
      font-size: 17px;
      line-height: 24px;
      padding-top: 5px;
    }
    h1 {
      font-weight: 600;
      text-transform: none;
      font-size: 15px;
      line-height: 25px;
    }
    button {
      height: 46px;
      background: #006400;
      color: #fff;
      font-size: 26px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    h3 {
      font-weight: 500;
    }
    .home-form {
      padding: 0px 64px;
      input {
        height: 45px;
        width: 100%;
      }
    }
  }
  .ant-select-selector {
      height: 45px !important;
      span {
          text-align: left;
          font-size: 18px;
      }
  }
`);
