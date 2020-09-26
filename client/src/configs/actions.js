import axios from 'axios';
import { TYPE } from '../constants';
import { API_URL } from '../services';

export const loadDataCompany = () => {
  return (dispatch) => {
    dispatch(loadDataCompanyProcess());
    axios
      .get(`${API_URL}/company`)
      .then((response) => {
        const datas = response.data;
        dispatch(loadDataCompanySuccess(datas));
      })
      .catch((error) => {
        console.error(error);
        dispatch(loadDataCompanyFailure(error.message));
      });
  };
};

export const loadDataCompanyProcess = () => {
  return {
    type: TYPE.LOAD_DATA_COMPANY,
  };
};

export const loadDataCompanySuccess = (datas) => {
  return {
    type: TYPE.LOAD_DATA_COMPANY_SUCCESS,
    datas,
  };
};

export const loadDataCompanyFailure = (error) => {
  return {
    type: TYPE.LOAD_DATA_COMPANY_FAILURE,
    data: error,
  };
};
