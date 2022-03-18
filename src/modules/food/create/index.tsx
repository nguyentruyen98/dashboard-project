import {Col, Input, Row} from 'antd';
import Button from 'components/button';
import {API_METHODS} from 'constants/index';
import {useFormik} from 'formik';
import {Api} from 'hook/useApi';
import {noop} from 'lodash';
import React from 'react';
import {useNavigate} from 'react-router';
import {ROUTES} from 'routes/routes';
const AddFood = () => {
  const navigate = useNavigate();
  const {values, handleChange} = useFormik({
    initialValues: {title: '', description: ''},
    onSubmit: noop,
  });

  const hadleCreateFood = async () => {
    try {
      await Api({
        url: 'http://localhost:8080/api/tutorials',
        method: API_METHODS.POST,
        data: {...values},
      });
      navigate(ROUTES.FOOD);
    } catch (err) {
      //handle Error here
    }
  };
  return (
    <div>
      <Row gutter={[24, 24]} justify="end">
        <Col span={12}>
          <Input placeholder="Type title" id="title" onChange={handleChange} />
        </Col>
        <Col span={12}>
          <Input
            placeholder="Type description"
            id="description"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Button onClick={hadleCreateFood}>Create Food</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFood;
