import {
  ADD_DATA,
  DELETE_DATA,
  ADD_LOCAL_STORAGE_DATA,
} from '../constants';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      const newData = state.data.some(el => el.title === action.payload.title) ? state.data :state.data.concat(action.payload);
      localStorage.setItem("data",JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };
    case DELETE_DATA:
      const deletedData = state.data.filter(el => el.id !== action.payload);
      localStorage.setItem("data",JSON.stringify(deletedData));
      return {
        ...state,
        data: deletedData,
      };
    case ADD_LOCAL_STORAGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
