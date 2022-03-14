import {TablePaginationConfig} from 'antd';
import {AnyObject} from 'constants/type';
export type TSize = 'small' | 'middle' | 'large' | undefined;

export interface ITableProps {
  data: AnyObject | AnyObject[] | undefined;
  columns: AnyObject[];
  header?: ReactNode;
  size?: TSize;
  pagination?: TablePaginationConfig | boolean;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, (Key | boolean)[] | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>,
  ) => void;
  loading?: boolean;
  className?: string;
  rowClassName?: string;
  rowSelection?: AnyObject;
  onRow?: any;
  rowKey?: string;
  noDataText?: string;
  tableUnit?: string;
  searchStatus?: boolean;
  scrollable?: boolean;
  pageSize?: number;
}
