import React from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';
import { InputField } from '../../IntegrationReduxForm';
import PropTypes from 'prop-types';
import './CompanyForm.scss';

const CompanyForm = (props) => {
  const [form] = Form.useForm();
  const { handleSubmit, onSubmit } = props;

  return (
    <Form className="form-section" form={form} layout="vertical">
      <Form.Item className="form-group" label="Name:">
        <Field
          component={InputField}
          name="companyName"
          placeholder="name"
          type="text"
          variant="input"
        />
      </Form.Item>
      <Form.Item className="form-group" label="Address:">
        <Field
          component={InputField}
          name="companyAddress"
          placeholder="address"
          type="text"
          variant="input"
        />
      </Form.Item>
      <Form.Item className="form-group" label="Revenue:">
        <Field
          component={InputField}
          name="companyRevenue"
          placeholder="revenue"
          type="number"
          variant="input"
        />
      </Form.Item>
      <Form.Item className="form-group phone-number" label="Phone No:">
        <Field
          component={InputField}
          name="code"
          placeholder="code"
          type="number"
          className="code"
          variant="input"
        />
        <Field
          component={InputField}
          name="number"
          placeholder="number"
          type="number"
          className="number"
          variant="input"
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

CompanyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CompanyForm;
