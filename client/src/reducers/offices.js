import { TYPE } from '../constants';

const initialState = {
  companyById: [],
  officeById: [],
};

const overview = (state = initialState, action) => {
  const { type, datas } = action;
  const {
    LOAD_DATA_COMPANY_BY_ID,
    LOAD_DATA_COMPANY_BY_ID_SUCCESS,
    LOAD_DATA_COMPANY_BY_ID_FAILURE,
    LOAD_DATA_OFFICE_BY_ID,
    LOAD_DATA_OFFICE_BY_ID_SUCCESS,
    LOAD_DATA_OFFICE_BY_ID_FAILURE,
    REMOVE_DATA_OFFICE,
    REMOVE_DATA_OFFICE_SUCCESS,
    REMOVE_DATA_OFFICE_FAILURE,
  } = TYPE;

  switch (type) {
    case LOAD_DATA_COMPANY_BY_ID:
      return {
        ...state,
      };
    case LOAD_DATA_COMPANY_BY_ID_SUCCESS:
      return {
        ...state,
        companyById: datas,
      };
    case LOAD_DATA_COMPANY_BY_ID_FAILURE:
      return {
        companyById: [],
      };
    case LOAD_DATA_OFFICE_BY_ID:
      return {
        ...state,
      };
    case LOAD_DATA_OFFICE_BY_ID_SUCCESS:
      return {
        ...state,
        officeById: datas,
      };
    case LOAD_DATA_OFFICE_BY_ID_FAILURE:
      return {
        officeById: [],
      };
    case REMOVE_DATA_OFFICE:
      const newData = state.officeById.filter(
        (item) => item.officeId !== action.officeId
      );
      return { ...state, officeById: newData };
    case REMOVE_DATA_OFFICE_SUCCESS:
    case REMOVE_DATA_OFFICE_FAILURE:
    default:
      return state;
  }
};

export default overview;
