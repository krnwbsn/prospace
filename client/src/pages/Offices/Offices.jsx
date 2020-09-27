import React, { Fragment, useEffect } from 'react';
import { Layout, Button, Col, Row, Modal } from 'antd';
import { Card } from '../../components';
import { Link } from 'react-router-dom';
import './Offices.scss';
import 'antd/dist/antd.css';
import {
  loadDataCompanyById,
  loadDataOfficeById,
  deleteDataOffice,
} from '../../configs/actions';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/text';
import PropTypes from 'prop-types';

const Offices = (props) => {
  const {
    dataCompanyById,
    loadDataCompanyById,
    loadDataOfficeById,
    dataOfficeById,
    match,
    deleteDataOffice,
  } = props;
  const { id } = match.params;
  const { confirm } = Modal;

  useEffect(() => {
    loadDataCompanyById(id);
    loadDataOfficeById(id);
  }, [loadDataCompanyById, loadDataOfficeById, id]);

  const showConfirm = (officeId, officeName) => {
    confirm({
      title: `Do you Want to delete ${officeName}?`,
      onOk() {
        deleteDataOffice(officeId);
      },
      onCancel() {},
      className: 'modal-comfirmation',
    });
  };

  const handleDeleteOffice = (officeId, officeName) => {
    showConfirm(officeId, officeName);
  };

  console.log(dataCompanyById);

  return (
    <Fragment>
      <Layout className="container">
        <div className="box">
          {dataCompanyById.map((item) => (
            <Fragment key={item.id}>
              <div>
                <h2 className="name">{item.companyName}</h2>
              </div>
              <div className="divider-horizontal" />
              <Col className="info">
                <Col>
                  <h3>Address:</h3>
                  <p>{item.companyAddress}</p>
                  <h3>Revenue:</h3>
                  <p>{item.companyRevenue}</p>
                  <h3>Phone No:</h3>
                  <p>
                    {item.phoneNumber.code} {item.phoneNumber.number}
                  </p>
                </Col>
                <Col className="button">
                  <Link to={'/'}>
                    <Button>Back to Overview</Button>
                  </Link>
                </Col>
              </Col>
            </Fragment>
          ))}
          <div className="divider-horizontal" />
          <Row className="offices">
            <Col className="content">
              <div>
                <h2>Offices</h2>
              </div>
              <Row className="cards">
                {dataOfficeById.map((item) => (
                  <Card
                    className="card"
                    key={item.officeId}
                    officeName={item.officeName}
                    lat={item.location.lat}
                    log={item.location.log}
                    startDate={formatDate(item.startDate)}
                    type="office"
                    onDelete={() =>
                      handleDeleteOffice(item.officeId, item.officeName)
                    }
                  />
                ))}
              </Row>
            </Col>
          </Row>
          {dataOfficeById.length === 0 && (
            <div className="no-data">
              <h1>There is no office created yet</h1>
            </div>
          )}
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCompanyById: state.offices.companyById,
    dataOfficeById: state.offices.officeById,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataCompanyById: (id) => dispatch(loadDataCompanyById(id)),
    loadDataOfficeById: (id) => dispatch(loadDataOfficeById(id)),
    deleteDataOffice: (officeId) => dispatch(deleteDataOffice(officeId)),
  };
};

Offices.propTypes = {
  dataCompanyById: PropTypes.arrayOf(
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
  loadDataCompanyById: PropTypes.func.isRequired,
  loadDataOfficeById: PropTypes.func.isRequired,
  dataOfficeById: PropTypes.arrayOf(
    PropTypes.shape({
      officeId: PropTypes.number,
      officeName: PropTypes.string,
      lat: PropTypes.string,
      log: PropTypes.string,
      startDate: PropTypes.string
    })
  ).isRequired,
  match: PropTypes.object,
  deleteDataOffice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Offices);
