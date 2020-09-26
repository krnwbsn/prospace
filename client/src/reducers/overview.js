import { TYPE } from '../constants';

const initialState = {
  companies: [],
};

const overview = (state = initialState, action) => {
  const { type, datas } = action;
  const { LOAD_DATA_COMPANY, LOAD_DATA_COMPANY_SUCCESS, LOAD_DATA_COMPANY_FAILURE } = TYPE;

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
    default:
      return state;
  }
};

export default overview;
