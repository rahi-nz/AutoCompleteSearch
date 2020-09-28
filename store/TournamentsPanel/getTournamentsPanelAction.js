import {
  GET_DATA,
} from '../constants';

export const getTournamentsPanelAction = (data) => async (dispatch) => {
  dispatch({ type: GET_DATA, payload: { data } });
};
