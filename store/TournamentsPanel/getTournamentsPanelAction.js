import {
  ADD_DATA,
  ADD_LOCAL_STORAGE_DATA,
  DELETE_DATA,
} from '../constants';

export const addDataFromLocalStorageAction = (data) => async (dispatch) => {
  dispatch({ type: ADD_LOCAL_STORAGE_DATA, payload: data });
};
export const addTournamentsPanelAction = (title,data) => async (dispatch) => {
  const newItem = data?.find(el => el.title === title);
  dispatch({ type: ADD_DATA, payload: newItem });
};

export const deleteTournamentsPanelAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_DATA, payload: id });
};
