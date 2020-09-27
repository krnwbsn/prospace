import React, { Fragment } from 'react';
import { Col } from 'antd';
import './Card.scss';
import CloseIcon from '../../assets/icons/close.svg';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    companyName,
    companyAddress,
    companyRevenue,
    code,
    number,
    onDelete,
    onDetail,
  } = props;

  return (
    <Fragment>
      <Col className="card" onClick={onDetail}>
        <div className="company-header">
          <h3>{companyName}</h3>
          <img className="icon" src={CloseIcon} alt="" onClick={onDelete} />
        </div>
        <div className="divider-horizontal" />
        <div className="company-informations">
          <span className="detail">Address:</span>
          <p>{companyAddress}</p>
          <span className="detail">Revenue:</span>
          <p>{companyRevenue}</p>
          <span className="detail">Phone No:</span>
          <p>{`${code} ${number}`}</p>
        </div>
      </Col>
    </Fragment>
  );
};

Card.defaultProps = {
  companyName: 'Google',
  companyAddress:
    '1600 Amphitheatre Parkway Mountain View, CA 94043 United States',
  companyRevenue: 9999999,
  code: '(86)',
  number: '571-8502-2088',
  onDelete: () => {},
  onDetail: () => {},
};

Card.propTypes = {
  companyName: PropTypes.string,
  companyAddress: PropTypes.string,
  companyRevenue: PropTypes.number,
  code: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  onDetail: PropTypes.func,
};

export default Card;
