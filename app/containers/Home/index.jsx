import React, { useState, useCallback, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import Banner from "./Banner/index"
import _ from "lodash";
import Sale from "./Sale";
import Hot from "./Hot";
let time;
const Home = ({ className }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loadding, setLoading] = useState(false);
  const [params, setParams] = useState({
    
  });
//   const getData = useCallback(async () => {
//     setLoading(true);
//     let newParams = {
      
//     };
//     const result = await ServiceBase.requestJson({
//       method: "GET",
//       url: "/report/general-by-month",
//       data: newParams,
//     });
//     if (result.hasErrors) {
//       Ui.showErrors(result.errors);
//     } else {
//       let data = _.map(_.get(result, "value.result.bookings"), (item, key) => {
//         return item;
//       });
//       setTotal(result.value.total);
//       setData(data);
//     }
//     await setLoading(false);
//   }, [params]);

//   useEffect(() => {
//     clearTimeout(time);
//     time = setTimeout(getData, 800);
//   }, [getData]);

  return (
    <>
        <Banner />
        <Sale />
        <Hot />
    </>
  );
};

Home.propTypes = {
  className: PropTypes.any,
};
export default styled(Home)``;
