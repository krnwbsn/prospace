import { TYPE } from '../constants';

const initialState = {
  companies: [],
  company: [],
  office: []
};

const overview = (state = initialState, action) => {
  const { type, datas, payload } = action;
  const {
    LOAD_DATA_COMPANY,
    LOAD_DATA_COMPANY_SUCCESS,
    LOAD_DATA_COMPANY_FAILURE,
    ADD_DATA_COMPANY,
    ADD_DATA_COMPANY_SUCCESS,
    ADD_DATA_COMPANY_FAILURE,
    REMOVE_DATA_COMPANY,
    REMOVE_DATA_COMPANY_SUCCESS,
    REMOVE_DATA_COMPANY_FAILURE,
    ADD_DATA_OFFICE,
    ADD_DATA_OFFICE_SUCCESS,
    ADD_DATA_OFFICE_FAILURE,
  } = TYPE;

  switch (type) {
    case LOAD_DATA_COMPANY:
      return {
        ...state,
      };
    case LOAD_DATA_COMPANY_SUCCESS:
      return {
        ...state,
        companies: datas,
      };
    case LOAD_DATA_COMPANY_FAILURE:
      return {
        companies: [],
      };
    case ADD_DATA_COMPANY:
      return {
        ...state,
      };
    case ADD_DATA_COMPANY_SUCCESS:
      return {
        ...state,
        company: payload,
      };

    case ADD_DATA_COMPANY_FAILURE:
    case REMOVE_DATA_COMPANY:
      let newData = state.companies.filter((item) => item.id !== action.id);
      return { companies: newData };
    case REMOVE_DATA_COMPANY_SUCCESS:
    case REMOVE_DATA_COMPANY_FAILURE:
    case ADD_DATA_OFFICE:
      return {
        ...state,
      }
    case ADD_DATA_OFFICE_SUCCESS:
      return {
        ...state,
        office: payload,
      }
    case ADD_DATA_OFFICE_FAILURE:
    default:
      return state;
  }
};

export default overview;
