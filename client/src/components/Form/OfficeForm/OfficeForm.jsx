import React from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';
import { InputField } from '../../IntegrationReduxForm';
import PropTypes from 'prop-types';
import './OfficeForm.scss';

const OfficeForm = (props) => {
  const [form] = Form.useForm();
  const { options, handleSubmit, onSubmit } = props;

  return (
    <Form className="form-section" form={form} layout="vertical">
      <Form.Item className="form-group" label="Name:">
        <Field
          component={InputField}
          name="officeName"
          placeholder="name"
          type="text"
          variant="input"
        />
      </Form.Item>
      <Form.Item className="form-group location" label="Location:">
        <Field
          component={InputField}
          name="lat"
          placeholder="latitude"
          type="number"
          variant="input"
          className="lat"
        />
        <Field
          component={InputField}
          name="log"
          placeholder="longitude"
          type="number"
          variant="input"
          className="log"
        />
      </Form.Item>
      <Form.Item className="form-group" label="Office Start Date:">
        <Field
          component={InputField}
          name="startDate"
          placeholder="date"
          variant="date"
          className="date-picker"
        />
      </Form.Item>
      <Form.Item className="form-group" label="Company:">
        <Field
          component={InputField}
          name="companyId"
          className="select"
          variant="select"
          options={options}
          defaultValue="Select company"
        />
      </Form.Item>
      <Form.Item className="form-group">
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

OfficeForm.defaultProps = {
  options: [],
  handleSubmit: () => {},
  onSubmit: () => {},
};

OfficeForm.propTypes = {
  options: PropTypes.array,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default OfficeForm;
