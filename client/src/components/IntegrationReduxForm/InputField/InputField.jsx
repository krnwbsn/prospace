import React, { Fragment } from 'react';
import { Input, Select, DatePicker } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import './InputField.scss';

const InputField = (props) => {
  const { Option } = Select;

  const {
    className,
    input,
    isReadOnly,
    meta: { touched, error },
    name,
    touch,
    label,
    variant,
    options,
    defaultValue,
    ...custom
  } = props;

  return (
    <Fragment>
      {variant === 'input' && (
        <Input
          error={touched && error ? true : false}
          name={name}
          onChange={(value) => input.onChange(value)}
          readOnly={isReadOnly ? true : false}
          className={className}
          {...input}
          {...custom}
        />
      )}
      {variant === 'date' && (
        <DatePicker
          className={className}
          onChange={(value) =>
            input.onChange(moment(value).format('YYYY-MM-DD'))
          }
        />
      )}
      {variant === 'select' && (
        <Select
          className={className}
          defaultValue={defaultValue}
          onChange={(value) => input.onChange(value)}
        >
          <Option value={defaultValue} disabled>
            {defaultValue}
          </Option>
          {options.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.companyName}
            </Option>
          ))}
        </Select>
      )}
      {touched && error && <span className="error">{error}</span>}
    </Fragment>
  );
};

InputField.defaultProps = {
  className: '',
  input: {},
  isReadOnly: false,
  meta: {},
  name: '',
  touch: false,
  label: '',
  defaultValue: '',
  options: [],
  error: '',
};

InputField.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  isReadOnly: PropTypes.bool,
  meta: PropTypes.object,
  name: PropTypes.string,
  touch: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
};

export default InputField;
