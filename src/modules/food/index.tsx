import {Col, Row} from 'antd';
import Button from 'components/button';
import Table from 'components/table';
import {API_METHODS} from 'constants/index';
import useApi from 'hook/useApi';
import React from 'react';
import {useNavigate} from 'react-router';
import {ROUTES} from 'routes/routes';
const Food = () => {
  const nagigate = useNavigate();
  const {data: sourceData} = useApi({
    url: 'http://localhost:8080/api/tutorials',
    method: API_METHODS.GET,
    loadInitialState: true,
  });
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const handleNavigate = () => {
    nagigate(ROUTES.CREATE_FOOD);
  };
  const tableHeader = () => {
    return (
      <Row justify="end">
        <Col>
          <Button onClick={handleNavigate}>Add New User</Button>
        </Col>
      </Row>
    );
  };
  return (
    <>
      <Table
        columns={columns}
        data={sourceData}
        header={tableHeader}
        rowKey={'id'}
      />
    </>
  );
};

export default Food;
