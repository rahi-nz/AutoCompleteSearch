import {
  GET_DATA,
} from '../constants';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
