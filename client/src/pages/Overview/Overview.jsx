import React, { Fragment, useState, useEffect } from 'react';
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
import {
  loadDataCompany,
  deleteDataCompany,
  postDataCompany,
} from '../../configs/actions';
import { connect } from 'react-redux';

const Overview = (props) => {
  const { dataCompanies, loadDataCompany, postDataCompany } = props;
  const { Option } = Select;
  const [form] = Form.useForm();
  const initialDataCompanyState = {
    companyName: '',
    companyAddress: '',
    companyRevenue: '',
    code: '',
    number: '',
  };
  const [companyPayload, setCompanyPayload] = useState(initialDataCompanyState);

  useEffect(() => {
    loadDataCompany();
  }, [loadDataCompany]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postDataCompany(companyPayload);
    setCompanyPayload(initialDataCompanyState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompanyPayload({ ...companyPayload, [name]: value });
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
              >
                <Form.Item className="form-group" label="Name:" required>
                  <Input
                    type="text"
                    placeholder="name"
                    name="companyName"
                    value={companyPayload.companyName}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item className="form-group" label="Address:" required>
                  <Input
                    type="text"
                    placeholder="address"
                    name="companyAddress"
                    value={companyPayload.companyAddress}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item className="form-group" label="Revenue:" required>
                  <Input
                    type="number"
                    placeholder="revenue"
                    name="companyRevenue"
                    value={companyPayload.companyRevenue}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item
                  className="form-group phone-number"
                  label="Phone No:"
                  required
                >
                  <Input
                    type="number"
                    className="code"
                    placeholder="code"
                    name="code"
                    value={companyPayload.code}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="number"
                    className="number"
                    placeholder="number"
                    name="number"
                    value={companyPayload.number}
                    onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item className="form-group">
                  <Button type="submit" onClick={(event) => handleSubmit(event)}>Create</Button>
                </Form.Item>
              </Form>
            </Col>
            <div className="divider-vertical" />
            <Col className="content gutter-row">
              <div>
                <h2>Create Office</h2>
              </div>
              <Form className="form-section" form={form} layout="vertical">
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
                {dataCompanies.map((item) => (
                  <Card
                    key={item.id}
                    companyName={item.companyName}
                    companyAddress={item.companyAddress}
                    companyRevenue={item.companyRevenue}
                    code={item.phoneNumber.code}
                    number={item.phoneNumber.number}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCompanies: state.overview.companies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataCompany: () => dispatch(loadDataCompany()),
    postDataCompany: (payload) => dispatch(postDataCompany(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
