import axios from 'axios';
import { TYPE } from '../constants';
import { API_URL } from '../services';

const request = axios.create({
  baseURL: API_URL,
  timout: 1000,
});

export const loadDataCompany = () => {
  return (dispatch) => {
    dispatch(loadDataCompanyProcess());
    return request
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

export const postDataCompany = (payload) => {
  return (dispatch) => {
    dispatch(addDataCompanyProcess(payload));
    console.log(payload);
    return request
      .post(`${API_URL}/company`, payload)
      .then((response) => {
        dispatch(addDataCompanySuccess(response.data));
        dispatch(loadDataCompany());
      })
      .catch((error) => {
        console.error(error);
        dispatch(addDataCompanyFailure([]));
      });
  };
};

export const addDataCompanyProcess = (payload) => {
  return {
    type: TYPE.ADD_DATA_COMPANY,
    payload,
  };
};

export const addDataCompanySuccess = (payload) => {
  return {
    type: TYPE.ADD_DATA_COMPANY_SUCCESS,
    payload,
  };
};

export const addDataCompanyFailure = (id) => {
  return {
    type: TYPE.ADD_DATA_COMPANY_FAILURE,
    id,
  };
};

export const deleteDataCompany = (id) => {
  return (dispatch) => {
    dispatch(removeDataCompany(id));
    return axios
      .delete(`${API_URL}/company/${id}`)
      .then(() => {
        dispatch(loadDataCompany());
      })
      .catch((error) => {
        console.error(error);
        dispatch(loadDataCompanyFailure(error));
      });
  };
};

export const removeDataCompany = (id) => {
  return {
    type: TYPE.REMOVE_DATA_COMPANY,
    id,
  };
};
