import {AnyObject} from 'constants/type';

export interface IApiProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'patch';
  params?: AnyObject | string | undefined;
  data?: string;
}
export interface IUseApiProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'patch';
  loadInitialState?: boolean;
  params?: AnyObject | string | undefined;
}
