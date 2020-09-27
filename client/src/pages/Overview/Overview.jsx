import React, { Fragment, useEffect } from 'react';
import { Layout, Row, Col, Modal } from 'antd';
import { Card } from '../../components';
import { CompanyForm, OfficeForm } from '../../components/Form';
import './Overview.scss';
import 'antd/dist/antd.css';
import {
  loadDataCompany,
  deleteDataCompany,
  postDataCompany,
  postDataOffice,
} from '../../configs/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const { confirm, info } = Modal;
  const {
    dataCompanies,
    loadDataCompany,
    postDataCompany,
    deleteDataCompany,
    postDataOffice,
  } = props;

  useEffect(() => {
    loadDataCompany();
  }, [loadDataCompany]);

  const showConfirm = (id, companyName) => {
    confirm({
      title: `Do you Want to delete ${companyName}?`,
      onOk() {
        deleteDataCompany(id);
      },
      onCancel() {},
      className: 'modal-comfirmation',
    });
  };

  const showInfoCompany = (values) => {
    info({
      title: `Data company has been created`,
      onOk() {
        postDataCompany(values);
        window.location.reload();
      },
      className: 'modal-comfirmation',
    });
  };

  const showInfoOffice = (values) => {
    info({
      title: `Data company has been created`,
      onOk() {
        postDataOffice(values);
        window.location.reload();
      },
      className: 'modal-comfirmation',
    });
  };

  const handleAddDataCompany = (values) => {
    showInfoCompany(values);
  };

  const handleAddDataOffice = (values) => {
    showInfoOffice(values);
  };

  const handleDeleteCompany = (id, companyName) => {
    showConfirm(id, companyName);
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
              <CompanyForm className="form" onSubmit={handleAddDataCompany} />
            </Col>
            <div className="divider-vertical" />
            <Col className="content gutter-row">
              <div>
                <h2>Create Office</h2>
              </div>
              <OfficeForm
                className="form"
                options={dataCompanies}
                onSubmit={handleAddDataOffice}
              />
            </Col>
          </Row>
          <div className="divider-horizontal" />
          <Row className="form-box">
            <Col className="content">
              <div>
                <h2>Companies</h2>
              </div>
              <Row className="cards">
                {dataCompanies.length > 0 &&
                  dataCompanies.map((item) => (
                    <Card
                      key={item.id}
                      className="card"
                      companyName={item.companyName}
                      companyAddress={item.companyAddress}
                      companyRevenue={item.companyRevenue}
                      code={item.phoneNumber.code}
                      number={item.phoneNumber.number}
                      onDelete={() =>
                        handleDeleteCompany(item.id, item.companyName)
                      }
                      type="company"
                      link={`/offices/${item.id}`}
                    />
                  ))}
              </Row>
            </Col>
          </Row>
          {dataCompanies.length === 0 && (
            <div className="no-data">
              <h1>There is no company created yet</h1>
            </div>
          )}
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
    deleteDataCompany: (id) => dispatch(deleteDataCompany(id)),
    postDataOffice: (payload) => dispatch(postDataOffice(payload)),
  };
};

Overview.propTypes = {
  dataCompanies: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string,
      companyAddress: PropTypes.string,
      companyRevenue: PropTypes.number,
      phoneNumber: PropTypes.shape({
        code: PropTypes.string,
        number: PropTypes.string,
      }),
      id: PropTypes.number,
    })
  ).isRequired,
  loadDataCompany: PropTypes.func.isRequired,
  postDataCompany: PropTypes.func.isRequired,
  deleteDataCompany: PropTypes.func.isRequired,
  postDataOffice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
