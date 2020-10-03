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
      const newData = state.data.some(el => el.title === action.payload.title) ? state.data :[...state.data,action.payload];
      localStorage?.setItem("data",JSON.stringify(newData));
      return {
        data: newData,
      };
    case DELETE_DATA:
      const deletedData = state.data.filter(el => el.id !== action.payload);
      localStorage?.setItem("data",JSON.stringify(deletedData));
      return {
        data: deletedData,
      };
    case ADD_LOCAL_STORAGE_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
