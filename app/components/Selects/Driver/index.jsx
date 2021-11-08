import PropTypes from 'prop-types';
import React, { useCallback, memo, useState } from 'react';
import _ from 'lodash';
import ServiceBase from 'utils/ServiceBase';
import { Ui } from 'utils/Ui';
import { Select, Spin } from 'antd';
const { Option } = Select;
let timer = null;

const Driver = ({
  onSelect,
  mode = 'single',
  labelInValue = true,
  value,
  className,
  disabled,
}) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState([]);
  const fetch = useCallback(async ({ searchInput }) => {
    let newData = [];
    const param = {
      pageLimit: 20,
      currentPage: 0,
      searchInput,
      orderBy: { createdAt: 1 },
      query: { partnerUuid: '' },
    };
    setFetching(true);
    const result = await ServiceBase.requestJson({
      method: 'POST',
      url: `/users/vehicles/list`,
      data: param,
    });
    if (result.hasErrors) {
      Ui.showErrors(result.errors);
    } else {
      newData = _.map(_.get(result, 'value.data', []), x => ({
        key: x.uuid,
        label: x.fullName,
      }));
    }
    setFetching(false);
    setData(newData);
  }, []);
  return (
    <Select
      showArrow
      allowClear
      showSearch
      mode={mode}
      disabled={disabled}
      value={value}
      className={className}
      labelInValue={labelInValue}
      defaultActiveFirstOption={false}
      filterOption={false}
      placeholder="Chọn lái xe"
      notFoundContent={fetching ? <Spin size="small" /> : 'Không có dữ liệu'}
      onFocus={() => {
        fetch({ searchInput: '' });
      }}
      onChange={onSelect}
      onSearch={input => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fetch({ searchInput: input });
        }, 500);
      }}
      style={{ width: '100%' }}
    >
      {_.map(data, item => (
        <Option value={item.key}>{item.label}</Option>
      ))}
    </Select>
  );
};

Driver.propTypes = {
  className: PropTypes.any,
  disabled: PropTypes.any,
  labelInValue: PropTypes.bool,
  mode: PropTypes.string,
  onSelect: PropTypes.any,
  value: PropTypes.any,
};
export default memo(Driver);
