import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { Dropdown, Menu } from 'antd';
import _ from 'lodash';
import { useHistory, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountItem({ isAuthenticated, onLogOut }) {
  console.log('isAuthenticated', isAuthenticated)
  const history = useHistory();

  const _forwardTo = useCallback(
    to => {
      history.push(to);
    },
    [history],
  );
  const _handleLogOut = useCallback(() => {
    _forwardTo('/');
    onLogOut();
  }, [_forwardTo, onLogOut]);
  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => _forwardTo('/isAuthenticated')}>Thông tin khách hàng</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={_handleLogOut}>Đăng xuất</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {isAuthenticated ? (
        <Dropdown className="itemName" overlay={menu} placement="bottomCenter">
          <span>
            {_.get(isAuthenticated, 'fullName')} <FontAwesomeIcon icon="angle-down" />
          </span>
        </Dropdown>
      ) : (
        <Link className="itemName" to="/signin">
          Đăng nhập
        </Link>
      )}
    </div>
  );
}

AccountItem.propTypes = {
  isAuthenticated: PropTypes.any,
  onLogOut: PropTypes.func,
  isAuthenticated: PropTypes.any,
};

export default memo(AccountItem);
