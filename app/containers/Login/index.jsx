/* eslint-disable no-underscore-dangle */
/**
 *
 * SignIn
 *
 */

import React, { memo, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import Globals from "utils/globals";
import { Ui } from "utils/Ui";
import { makeSelectIsAuthenticated } from "containers/App/selectors";
import { setAuthenticated, setEntry } from "containers/App/actions";
import ServiceBase from "utils/ServiceBase";
import { createStructuredSelector } from "reselect";
import { Form, Row, Typography, Button, Divider, Col, Input } from "antd";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { GrFacebookOption, GrGoogle } from "react-icons/gr";
import { APP_NAME } from "utils/constants";
import BG_LOGIN from "images/bg_login.jpg";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
const _Cookies = window.Cookies;
const { Title } = Typography;
const formLayout = {
  wrapperCol: { span: 20 },
};
let time;
const SignIn = ({ className, isAuthenticated, setAuthenticated }) => {
  let nameApp = "Hải Vân";
  if (APP_NAME == "vungtau") {
    nameApp = "Hải Vân Vũng Tàu";
  } else if (APP_NAME == "hv") {
    nameApp = "Hải Vân";
  } else if (APP_NAME == "hshv") {
    nameApp = "Hải Sơn Hải Vân";
  }
  const [isFetching, setIsFetching] = useState(false);
  const _handleLogIn = useCallback(
    async (value) => {
      const params = {
        email: value.user.name,
        password: value.user.password,
      };
      setIsFetching(true);
      const result = await ServiceBase.requestJson({
        method: "POST",
        url: "/login",
        data: params,
      });

      if (result.hasErrors) {
        Ui.showErrors(result.errors);
        setIsFetching(false);
      } else {
        Ui.showSuccess({ message: "Đăng nhập thành công!" });
        let profile = _.get(result, "value.user", {});
        profile = {
          ...profile,
          name: _.get(profile, "value.name", ""),
          id: _.get(profile, "value.id", ""),
          type: _.get(profile, "value.type", ""),
          token: _.get(result, "value.token", {}),
        };
        delete profile.type;
        Globals.setSession({
          public: {
            erpReport: JSON.stringify(profile),
          },

          private: {
            token: _.get(result, "value.token"),
            refresh_token: _.get(result, "value.token"),
          },
        });

        setAuthenticated({
          isAuthenticated: true,
          profile,
        });
      }
    },
    [setAuthenticated]
  );

  const responseGoogle = async (response) => {
    console.log("response", response);
    let params = {
      address: null,
      email: _.get(response.profileObj, "email"),
      birthday: null,
      name:
        _.get(response.profileObj, "familyName") +
        _.get(response.profileObj, "givenName"),
      images: _.get(response.profileObj, "imageUrl"),
      name: _.get(response.profileObj, "name"),
      password: null,
      phone: null,
      sex: null,
      type: "CUSTORMER",
    };
    let url = "/register";
    let result = await ServiceBase.requestJson({
      url: url,
      method: "POST",
      data: params,
    });
    Ui.showSuccess({ message: "Đăng nhập hệ thống thành công." });
    let profile = _.get(result, "value")[0];

    profile = {
      // ...profile,
      parentName: _.get(profile, "name", ""),
      adm_name: _.get(profile, "name", ""),
      uuId: _.get(profile, "uuId", ""),
      parentId: _.get(profile, "id", ""),
      rolesName: _.get(profile, "email", ""),
    };
    delete profile.role;
    Globals.setSession({
      public: {
        erpReport: JSON.stringify(profile),
      },

      private: {
        token: _.get(response, "accessToken"),
        refresh_token: _.get(response, "accessToken"),
      },
    });

    setAuthenticated({
      isAuthenticated: true,
      profile,
    });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "Không được để trống!",
    types: {
      email: "Email không đúng định dạng!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  //Xử lý đăng nhập bằng facebook
  const responseFacebook = async (response) => {
    console.log("response", response);
    let params = {
      uuId: _.get(response, "id"),
      image: _.get(response.picture.data.url, "url"),
      name: _.get(response, "name"),
    };
    let url = "/usersocial/create";
    let result = await ServiceBase.requestJson({
      url: url,
      method: "POST",
      data: params,
    });
    Ui.showSuccess({ message: "Đăng nhập hệ thống thành công." });
    let profile = _.get(result, "value")[0];
    profile = {
      // ...profile,
      parentName: _.get(profile, "name", ""),
      adm_name: _.get(profile, "name", ""),
      uuId: _.get(profile, "uuId", ""),
      parentId: _.get(profile, "id", ""),
    };
    delete profile.role;
    Globals.setSession({
      public: {
        erpReport: JSON.stringify(profile),
      },

      private: {
        token: _.get(response, "accessToken"),
        refresh_token: _.get(response, "accessToken"),
      },
    });

    setAuthenticated({
      isAuthenticated: true,
      profile,
    });
  };

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${BG_LOGIN})`,
        backgroundSize: "cover",
        boxShadow: "unset",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="box__container">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one" />
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two" />
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three" />
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four" />
        </div>
        <div className="box__container-content">
          <div className="box__container-form">
            <Row className="box__container-row">
              <h3>Đăng nhập</h3>
              <Form
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}
                onFinish={_handleLogIn}
                style={{ width: "100%" }}
              >
                <Form.Item name={["user", "name"]} rules={[{ required: true }]}>
                  <Input placeholder="Email/Số điện thoại" />
                </Form.Item>
                <Form.Item
                  name={["user", "password"]}
                  rules={[
                    {
                      type: "string",
                      min: 8,
                      required: true,
                      message: "Mật khẩu phải có ít nhất 8 ký tự",
                    },
                  ]}
                >
                  <Input.Password placeholder="Mật khẩu" />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </Row>
            <Row
              justify="space-between"
              align="center"
              style={{ paddingTop: "5px" }}
            >
              <h4>Quên mật khẩu?</h4>
              <h4>Đăng ký</h4>
            </Row>
            <Divider orientation="center">Hoặc</Divider>
            <Row
              justify="center"
              align="middle"
              className="box__container-footer"
            >
              <ReactFacebookLogin
                appId="688248148848397"
                autoLoad={false}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook}
                className="style-button"
                // cssClass="my-facebook-button-class"
                icon="fa-facebook"
                textButton="Login with Facebook"
                version="3.1"
              />
              <GoogleLogin
                clientId="29925849028-2juggc9mk3aqnlc4pd1c6jv299541315.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="style-button"
                cookiePolicy={"single_host_origin"}
              />
              {/* <Button icon={<GrFacebookOption />}>Facebook</Button>
              <Button onClick={responseGoogle} icon={<GrGoogle />}>Google</Button> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
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
)(styled(SignIn)`
  .box__container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding-right: 2rem;
  }
  .box__container-content {
    max-width: 45%;
    margin: auto;
    padding-top: 130px;
    padding-bottom: 120px;
  }
  .box__container-content .box__container-form {
    background: var(--body-bg);
    border-radius: 5px;
  }
  .box__container-form h3 {
    margin: auto;
    padding: 55px 0px 0px 0px;
    text-transform: uppercase;
    color: var(--price-color);
    font-weight: 700;
    font-size: 26px;
  }
  .box__container-form .ant-row,
  .box__container-form .ant-divider {
    padding: 0 16%;
  }
  .ant-row.box__container-row input {
    padding: 10px;
    margin-bottom: 10px;
  }
  .box__container-row button {
    width: 100%;
    background: var(--price-color);
    color: var(--body-bg);
    font-size: 18px;
    font-weight: 600;
    height: auto;
  }
  .box__container-row button:hover {
    background: var(--body-bg);
    color: var(--price-color);
    border-color: var(--price-color);
  }
  .box__container-form .ant-divider {
    margin-top: 0px;
  }
  .box__container-form h4 {
    cursor: pointer;
    font-size: 12px;
  }
  .box__container-form .ant-divider span {
    color: var(--header-menu-detail-light);
    font-size: 12px;
  }
  .box__container-footer button {
    margin: 0px 4px 50px 0px;
    color: var(--body-bg);
    display: flex;
    align-items: center;
  }
  .box__container-footer button:nth-child(1) {
    background: #007aff;
  }
  .box__container-footer button:nth-child(2) {
    // background: #e14b33;
    height: 45px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px,
      rgb(0 0 0 / 24%) 0px 0px 1px 0px;
    margin-right: 10px;
    font-size: 14px;
    text-transform: capitalize;
  }
  .box__container-footer button svg {
    margin: 0 10px 0 0;
    font-size: 18px;
  }
  .ant-row.ant-form-item,
  span.ant-input-affix-wrapper.ant-input-password input {
    margin: 0;
  }
  span.ant-input-affix-wrapper.ant-input-password {
    padding-top: 0;
    padding-bottom: 0;
  }
  .box__container-form .ant-form-item {
    padding-left: 0px;
    padding-right: 0px;
  }
  .ant-picker-input input {
    padding: 5px !important;
    margin-bottom: 0px !important;
  }
  .ant-form-item-control-input {
    margin-bottom: 10px;
  }
  button.style-button div {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
`);
