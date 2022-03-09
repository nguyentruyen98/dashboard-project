import {BaseButtonProps} from 'antd/lib/button/button.d';

export interface IButtonProps extends BaseButtonProps {
  buttonType?: 'default' | 'warning' | 'error';
}
