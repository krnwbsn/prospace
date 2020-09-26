import { TYPE } from '../constants';

const initialState = {
  companies: [],
  company: [],
};

const overview = (state = initialState, action) => {
  const { type, datas, payload } = action;
  const {
    LOAD_DATA_COMPANY,
    LOAD_DATA_COMPANY_SUCCESS,
    LOAD_DATA_COMPANY_FAILURE,
    ADD_DATA_COMPANY,
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
        company: [payload],
      };
    default:
      return state;
  }
};

export default overview;
