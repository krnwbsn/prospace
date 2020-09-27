import React, { Fragment, useState, useEffect } from 'react';
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

const Overview = (props) => {
  const { confirm } = Modal;
  const {
    dataCompanies,
    loadDataCompany,
    postDataCompany,
    deleteDataCompany,
    postDataOffice,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDataCompany();
  }, [loadDataCompany]);

  const showConfirm = (id, companyName) => {
    confirm({
      title: `Do you Want to delete ${companyName}?`,
      onOk() {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          deleteDataCompany(id);
        }, 1500);
      },
      onCancel() {},
      className: 'modal-comfirmation',
    });
  };

  const handleAddDataCompany = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      postDataCompany(values);
    }, 1500);
  };

  const handleAddDataOffice = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      postDataOffice(values);
    }, 1500);
  };

  const handleDeleteCompany = (id, companyName) => {
    showConfirm(id, companyName);
  };

  const handleDetail = (id) => {
    console.log(id);
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
                {dataCompanies.map((item) => (
                  <Card
                    className="card"
                    key={item.id}
                    companyName={item.companyName}
                    companyAddress={item.companyAddress}
                    companyRevenue={item.companyRevenue}
                    code={item.phoneNumber.code}
                    number={item.phoneNumber.number}
                    onDelete={() =>
                      handleDeleteCompany(item.id, item.companyName)
                    }
                    onDetail={() => handleDetail(item.id)}
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
    deleteDataCompany: (id) => dispatch(deleteDataCompany(id)),
    postDataOffice: (payload) => dispatch(postDataOffice(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
