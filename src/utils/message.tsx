import {message} from 'antd';
import closeIcon from 'assets/icons/close-icon.svg';
import tickIcon from 'assets/icons/tick-icon.svg';
import warningIcon from 'assets/icons/warning-icon.png';
import {ALERT_TIME} from 'constants/index';
import {ALERT_TYPE, AlertType} from 'constants/type';
import React from 'react';
const renderMsg = (msg: string, type: AlertType) => (
  <div className="content-container">
    <p className="title">{`${type}!`}</p>
    <p className="content">{msg}</p>
  </div>
);
const success = (msg: string, type: AlertType, onClose: () => void) => {
  message.open({
    className: 'custom-msg',
    duration: ALERT_TIME,
    type: 'success',
    icon: <img src={tickIcon} height={40} width={40} />,
    content: renderMsg(msg, type),
    onClose: onClose,
  });
};

const warning = (msg: string, type: AlertType, onClose: () => void) => {
  message.open({
    className: 'custom-msg',
    duration: ALERT_TIME,
    type: 'success',
    icon: <img src={warningIcon} height={40} width={40} />,
    content: renderMsg(msg, type),
    onClose: onClose,
  });
};
const error = (msg: string, type: AlertType, onClose: () => void) => {
  message.open({
    className: 'custom-msg',
    duration: ALERT_TIME,
    type: 'success',
    icon: <img src={closeIcon} height={40} width={40} />,
    content: renderMsg(msg, type),
    onClose: onClose,
  });
};

export const appMessage = (
  type: AlertType,
  msg: string,
  onClose: () => void,
) => {
  //   message.config({prefixCls: 'my-message'});
  if (type === ALERT_TYPE.SUCCESS) {
    success(msg, type, onClose);
  } else if (type === ALERT_TYPE.ERROR) {
    error(msg, type, onClose);
  } else {
    warning(msg, type, onClose);
  }
};
