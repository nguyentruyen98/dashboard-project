import './index.scss';

import {Button as AntdButton} from 'antd';
import {BaseButtonProps} from 'antd/lib/button/button.d';
import clsx from 'clsx';
import React from 'react';

const Button = ({...props}: BaseButtonProps) => {
  return (
    <AntdButton className={clsx(props.className, 'custom-button')} {...props}>
      {props.children}
    </AntdButton>
  );
};

export default Button;
