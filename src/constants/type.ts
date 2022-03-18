import MethodsType from 'hook/useApi';

export interface AnyObject {
  [key: string]: any;
}

export type MethodsType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type ApiMethodsType = Record<
  'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  MethodsType
>;

export type AlertType = 'Success' | 'Error' | 'Warning';
export const ALERT_TYPE: Record<'SUCCESS' | 'ERROR' | 'WARNING', AlertType> = {
  SUCCESS: 'Success',
  ERROR: 'Error',
  WARNING: 'Warning',
};
