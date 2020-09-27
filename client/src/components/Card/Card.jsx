import React from 'react';
import { Col } from 'antd';
import './Card.scss';
import CloseIcon from '../../assets/icons/close.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {
    companyName,
    companyAddress,
    companyRevenue,
    code,
    number,
    onDelete,
    lat,
    log,
    startDate,
    type,
    officeName,
    link,
  } = props;

  return (
    <Col className={type === 'company' ? 'card' : 'card office'}>
      <div className="company-header">
        <h3>
          {type === 'company' ? (
            <Link to={link}>{companyName}</Link>
          ) : (
            officeName
          )}
        </h3>
        <img className="icon" src={CloseIcon} alt="" onClick={onDelete} />
      </div>
      <div className="divider-horizontal" />
      {type === 'company' && (
        <Link to={link}>
          <div className="company-informations">
            <span className="detail">Address:</span>
            <p>{companyAddress}</p>
            <span className="detail">Revenue:</span>
            <p>{companyRevenue}</p>
            <span className="detail">Phone No:</span>
            <p>{`${code} ${number}`}</p>
          </div>
        </Link>
      )}
      {type === 'office' && (
        <div className="company-informations">
          <span className="detail">Location:</span>
          <p>
            Lat - {lat}
            <br />
            Log - {log}
          </p>
          <span className="detail">Office Start Date:</span>
          <p>{startDate}</p>
        </div>
      )}
    </Col>
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
  lat: '',
  log: '',
  startDate: '6/20/1997',
  officeName: '',
  link: '',
};

Card.propTypes = {
  companyName: PropTypes.string,
  companyAddress: PropTypes.string,
  companyRevenue: PropTypes.number,
  code: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  onDetail: PropTypes.func,
  lat: PropTypes.string,
  log: PropTypes.string,
  officeName: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
