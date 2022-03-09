import './index.scss';

import {Button as AntdButton} from 'antd';
import clsx from 'clsx';
import {IButtonProps} from 'components/button/index.d';
import React from 'react';
import {useApplicationSelector} from 'stores/application/application';
const Button = ({buttonType = 'default', ...props}: IButtonProps) => {
  const applicationState = useApplicationSelector(state => state.application);

  return (
    <AntdButton
      className={clsx(
        props.className,
        'custom-button',
        applicationState.theme === 'dark' ? 'dark-button' : 'light-button',
        buttonType,
      )}
      {...props}
    >
      {props.children}
    </AntdButton>
  );
};

export default Button;
