import {Col, Input, Row} from 'antd';
import Button from 'components/button';
import {ALERT_MESSAGE, API_METHODS} from 'constants/index';
import {ALERT_TYPE} from 'constants/type';
import {useFormik} from 'formik';
import {Api} from 'hook/useApi';
import {noop} from 'lodash';
import React from 'react';
import {useNavigate} from 'react-router';
import {ROUTES} from 'routes/routes';
import {setAlert, useApplicationDispatch} from 'stores/application/application';
const AddFood = () => {
  const dispatch = useApplicationDispatch();
  const navigate = useNavigate();
  const {values, handleChange} = useFormik({
    initialValues: {title: '', description: ''},
    onSubmit: noop,
  });

  const handleCreateFood = async () => {
    try {
      await Api({
        url: 'http://localhost:8080/api/tutorials',
        method: API_METHODS.POST,
        data: {...values},
      });
      dispatch(
        setAlert({type: ALERT_TYPE.SUCCESS, message: ALERT_MESSAGE.SUCCESS}),
      );
      navigate(ROUTES.FOOD);
    } catch (err) {
      dispatch(
        setAlert({type: ALERT_TYPE.ERROR, message: ALERT_MESSAGE.ERROR}),
      );
    }
  };
  const handleGoBack = () => {
    navigate(ROUTES.FOOD);
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
          <Button onClick={handleGoBack}>Back</Button>
        </Col>
        <Col>
          <Button onClick={handleCreateFood}>Create Food</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddFood;
