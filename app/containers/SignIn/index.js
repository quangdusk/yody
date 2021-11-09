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
import { Form, Row, Typography, Button, Checkbox, Col, Input } from "antd";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
// import Input from "components/Input";
import { URI } from "./constants";
import { BASE_URL } from "../../utils/constants";
// import BackgroundSingin from "images/img17.jpg";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { APP_NAME } from "utils/constants";
const _Cookies = window.Cookies;
import "./style.scss";
const { Title } = Typography;
const formLayout = {
  wrapperCol: { span: 20 },
};
let time
const SignIn = ({ className, isAuthenticated, setAuthenticated }) => {
  let nameApp = "Hải Vân";
  if (APP_NAME == "vungtau") {
    nameApp = "Hải Vân Vũng Tàu";
  } else if (APP_NAME == "hv") {
    nameApp = "Hải Vân";
  } else if (APP_NAME == "hshv") {
    nameApp = "Hải Sơn Hải Vân";
  }
  const [, setIsFetching] = useState(false);
  // const _handleLogIn = useCallback(
  //   async (sso_token) => {
  //     setIsFetching(true);
  //     const result = await ServiceBase.requestJson({
  //       method: "GET",
  //       url: '/info-user',
  //       data: {
  //         token: sso_token
  //       },
  //     });

  //     if (result.hasErrors) {
  //       // window.location.href = `${BASE_URL}/sso/sso-login`;
  //       window.location.href = `http://dev.boc.haivanexpress.vn/sso/sso-login`;
  //     } else {
  //       // Ui.showSuccess({ message: "Đăng nhập hệ thống thành công." });
  //       let profile = _.get(result, "value", {});
  //       profile = {
  //         ...profile,
  //         parentName: _.get(profile, "value.adm_name", ""),
  //         parentId: _.get(profile, "value.adm_id", ""),
  //         rolesName: _.get(profile, "value.role", ""),
  //       };
  //       delete profile.role;
  //       Globals.setSession({
  //         public: {
  //           erpReport: JSON.stringify(profile),
  //         },
          
  //         private: {
  //           token: _.get(result, "value.accessToken"),
  //           refresh_token: _.get(result, "value.refreshToken"),
  //         },
  //       });

  //       setAuthenticated({
  //         isAuthenticated: true,
  //         profile,
  //       });
  //     }
  //   },
  //   [setAuthenticated]
  // );

  const onFinishFailed = useCallback(() => {}, []);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const _handLogin = ()=>{
    window.location.href = `${BASE_URL}/sso/sso-login`
  }
  // useEffect(() => {
  //   window.location.href = `${BASE_URL}/sso/sso-login`

  // }, [])
  return (
    <div
      className={className}
      style={{
        // backgroundImage: `url(${BackgroundSingin})`,
        backgroundSize: "cover",
        boxShadow: "unset",
        backgroundRepeat: "no-repeat",

        // backgroundPosition: "bottom",
      }}
    >
      
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
  .MuiPaper-rounded {
    background: red;
  }

  display: flex;
  justify-content: center;
  padding: 120px 0;
  background-color: #fff;
  .loginTitle {
    text-align: center;
  }
  .ant-row {
    // background-color: #f2f6fc;
    border-radius: 5px;
    padding: 15px;
    justify-content: center;
    .btnLogin {
      display: flex;
    }
  }
  .ant-form-item {
    margin-bottom: 0px;
    .ant-form-item-label {
      text-align: left;
    }
    .ant-form-item-required:before {
      display: none !important;
    }
    .ant-form-item-required:after {
      color: #f5222d;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: "*" !important;
    }
  }
`);
