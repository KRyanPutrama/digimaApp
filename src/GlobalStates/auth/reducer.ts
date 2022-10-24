import produce from 'immer';
import { ActionReducer } from '../_prototype';
import { ReducerState } from './_prototype';

const INITIAL_STATE: ReducerState = {
  token: null,

  authData: null,
  authState: '',
  authError: null,
};

export const POST_LOGIN = 'POST_LOGIN';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const DELETE_USER_TOKEN = 'DELETE_USER_TOKEN';

export const actionReducer = produce(
  (
    state: ReducerState = INITIAL_STATE,
    action: ActionReducer,
  ): ReducerState => {
    switch (action.type) {
      case SET_USER_TOKEN:
        return {
          ...state,
          token: action.payload,
        };
      case DELETE_USER_TOKEN:
        return {
          ...state,
          token: null,
        };
      case `${POST_LOGIN}_LOADING`:
        return {
          ...state,
          authData: null,
          authState: 'loading',
          authError: null,
        };
      case `${POST_LOGIN}_SUCCESS`:
        return {
          ...state,
          authData: action.payload,
          authState: 'success',
          authError: null,
        };
      case `${POST_LOGIN}_FAILED`:
        return {
          ...state,
          authData: null,
          authState: 'error',
          authError: action.payload,
        };

      default:
        return state;
    }
  },
);

export default actionReducer;
