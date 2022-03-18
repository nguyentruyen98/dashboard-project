import 'components/table/index.scss';

import {Table as AntdTable} from 'antd';
import clsx from 'clsx';
import {ITableProps} from 'components/table/index.d';
import React from 'react';
import {useApplicationSelector} from 'stores/application/application';
const Table = ({
  data,
  columns,
  size = 'large',
  loading = false,
  className = '',
  rowClassName = '',
  onRow,
  rowSelection = undefined,
  rowKey = '',
  onChange,
  header,
}: ITableProps) => {
  const applicationState = useApplicationSelector(state => state.application);

  return (
    <div>
      {header && <div className="mb-15">{header()}</div>}
      <AntdTable
        dataSource={data || []}
        columns={columns}
        bordered={false}
        size={size}
        loading={loading}
        onChange={onChange}
        rowKey={rowKey}
        className={clsx(
          'custom-table',
          className,
          applicationState.theme === 'dark' ? 'dark-table' : 'light-table',
        )}
        rowClassName={clsx('custom-row', rowClassName)}
        onRow={onRow}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default Table;
