import axios from 'axios';
import { TYPE } from '../constants';
import { API_URL } from '../services';

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
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
  console.log(payload);
  return (dispatch) => {
    dispatch(addDataCompanyProcess());
    return request
      .post(`${API_URL}/company`, payload)
      .then((response) => {
        dispatch(addDataCompanySuccess(response.data));
        dispatch(loadDataCompany());
      })
      .catch((error) => {
        console.error(error);
        dispatch(addDataCompanyFailure(error));
      });
  };
};

export const addDataCompanyProcess = () => {
  return {
    type: TYPE.ADD_DATA_COMPANY,
  };
};

export const addDataCompanySuccess = (payload) => {
  return {
    type: TYPE.ADD_DATA_COMPANY_SUCCESS,
    payload,
  };
};

export const addDataCompanyFailure = () => {
  return {
    type: TYPE.ADD_DATA_COMPANY_FAILURE,
  };
};

export const deleteDataCompany = (id) => {
  return (dispatch) => {
    dispatch(removeDataCompany(id));
    return request
      .delete(`${API_URL}/company/${id}`)
      .then(() => {
        dispatch(removeDataCompanySuccess());
      })
      .catch((error) => {
        console.error(error);
        dispatch(removeDataCompanyFailure(error));
      });
  };
};

export const removeDataCompany = (id) => {
  return {
    type: TYPE.REMOVE_DATA_COMPANY,
    id,
  };
};

export const removeDataCompanySuccess = () => {
  return {
    type: TYPE.REMOVE_DATA_COMPANY_SUCCESS,
  };
};

export const removeDataCompanyFailure = (id) => {
  return {
    type: TYPE.REMOVE_DATA_COMPANY_FAILURE,
    id,
  };
};

export const postDataOffice = (payload) => {
  console.log(payload);
  return (dispatch) => {
    dispatch(addDataOfficeProcess());
    return request
      .post(`${API_URL}/office`, payload)
      .then((response) => {
        dispatch(addDataOfficeSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(addDataOfficeFailure(error));
      });
  };
};

export const addDataOfficeProcess = () => {
  return {
    type: TYPE.ADD_DATA_OFFICE,
  };
};

export const addDataOfficeSuccess = (payload) => {
  return {
    type: TYPE.ADD_DATA_OFFICE_SUCCESS,
    payload,
  };
};

export const addDataOfficeFailure = () => {
  return {
    type: TYPE.ADD_DATA_OFFICE_FAILURE,
  };
};

export const loadDataCompanyById = (id) => {
  return (dispatch) => {
    dispatch(loadDataCompanyByIdProcess(id));
    return request
      .get(`${API_URL}/company/${id}`)
      .then((response) => {
        const datas = response.data;
        dispatch(loadDataCompanyByIdSuccess(datas));
      })
      .catch((error) => {
        console.error(error);
        dispatch(loadDataCompanyByIdFailure(error.message));
      });
  };
};

export const loadDataCompanyByIdProcess = (id) => {
  return {
    type: TYPE.LOAD_DATA_COMPANY_BY_ID,
    id,
  };
};

export const loadDataCompanyByIdSuccess = (datas) => {
  return {
    type: TYPE.LOAD_DATA_COMPANY_BY_ID_SUCCESS,
    datas,
  };
};

export const loadDataCompanyByIdFailure = (error) => {
  return {
    type: TYPE.LOAD_DATA_COMPANY_BY_ID_FAILURE,
    data: error,
  };
};

export const loadDataOfficeById = (id) => {
  return (dispatch) => {
    dispatch(loadDataOfficeByIdProcess(id));
    return request
      .get(`${API_URL}/office/${id}`)
      .then((response) => {
        const datas = response.data;
        dispatch(loadDataOfficeByIdSuccess(datas));
      })
      .catch((error) => {
        console.error(error);
        dispatch(loadDataOfficeByIdFailure(error.message));
      });
  };
};

export const loadDataOfficeByIdProcess = (id) => {
  return {
    type: TYPE.LOAD_DATA_OFFICE_BY_ID,
    id,
  };
};

export const loadDataOfficeByIdSuccess = (datas) => {
  return {
    type: TYPE.LOAD_DATA_OFFICE_BY_ID_SUCCESS,
    datas,
  };
};

export const loadDataOfficeByIdFailure = (error) => {
  return {
    type: TYPE.LOAD_DATA_OFFICE_BY_ID_FAILURE,
    data: error,
  };
};

export const deleteDataOffice = (officeId) => {
  return (dispatch) => {
    dispatch(removeDataOffice(officeId));
    console.log(`${API_URL}/office/${officeId}`)
    return request
      .delete(`${API_URL}/office/${officeId}`)
      .then(() => {
        dispatch(removeDataOfficeSuccess());
      })
      .catch((error) => {
        console.error(error);
        dispatch(removeDataOfficeFailure(error));
      });
  };
};

export const removeDataOffice = (officeId) => {
  return {
    type: TYPE.REMOVE_DATA_OFFICE,
    officeId,
  };
};

export const removeDataOfficeSuccess = () => {
  return {
    type: TYPE.REMOVE_DATA_OFFICE_SUCCESS,
  };
};

export const removeDataOfficeFailure = (officeId) => {
  return {
    type: TYPE.REMOVE_DATA_OFFICE_FAILURE,
    officeId,
  };
};
