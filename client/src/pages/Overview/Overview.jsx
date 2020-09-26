import React, { Fragment, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Layout,
  Row,
  Col,
  Select,
  DatePicker,
} from 'antd';
import { Card } from '../../components';
import './Overview.scss';
import 'antd/dist/antd.css';

const Overview = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Fragment>
      <Layout className="container">
        <div className="box">
          <Row className="form-box">
            <Col className="content gutter-row">
              <div>
                <h2>Create Company</h2>
              </div>
              <Form
                className="form-section"
                form={form}
                layout="vertical"
                initialValues={{
                  requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <Form.Item className="form-group" label="Name:" required>
                  <Input placeholder="name" />
                </Form.Item>
                <Form.Item className="form-group" label="Address:" required>
                  <Input placeholder="address" />
                </Form.Item>
                <Form.Item className="form-group" label="Revenue:" required>
                  <Input type="number" placeholder="revenue" />
                </Form.Item>
                <Form.Item
                  className="form-group phone-number"
                  label="Phone No:"
                  required
                >
                  <Input type="number" className="code" placeholder="code" />
                  <Input
                    type="number"
                    className="number"
                    placeholder="number"
                  />
                </Form.Item>
                <Form.Item className="form-group">
                  <Button type="secondary">Create</Button>
                </Form.Item>
              </Form>
            </Col>
            <div className="divider-vertical" />
            <Col className="content gutter-row">
              <div>
                <h2>Create Office</h2>
              </div>
              <Form
                className="form-section"
                form={form}
                layout="vertical"
                initialValues={{
                  requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <Form.Item className="form-group" label="Name:" required>
                  <Input placeholder="name" />
                </Form.Item>
                <Form.Item
                  className="form-group location"
                  label="Location:"
                  required
                >
                  <Input type="number" className="lat" placeholder="latitude" />
                  <Input
                    type="number"
                    className="log"
                    placeholder="longitude"
                  />
                </Form.Item>
                <Form.Item
                  className="form-group"
                  label="Office Start Date:"
                  required
                >
                  <DatePicker
                    className="date-picker"
                    onChange={onChange}
                    placeholder="date"
                  />
                </Form.Item>
                <Form.Item className="form-group" label="Company:" required>
                  <Select
                    className="select"
                    defaultValue="select company"
                    onChange={handleChange}
                  >
                    <Option value="select company" disabled>
                      select company
                    </Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
                <Form.Item className="form-group">
                  <Button type="secondary">Create</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div className="divider-horizontal" />
          <Row className="form-box">
            <Col className="content">
              <div>
                <h2>Companies</h2>
              </div>
              <Row className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Overview;
