import produce from 'immer';
import { ActionReducer } from '../_prototype';
import { ReducerState } from './_prototype';

const INITIAL_STATE: ReducerState = {
  journeyData: null,
  journeyState: '',
  journeyError: null,
};

export const GET_JOURNEY = 'GET_JOURNEY';

export const actionReducer = produce(
  (state: ReducerState = INITIAL_STATE, action: ActionReducer) => {
    switch (action.type) {
      case `${GET_JOURNEY}_LOADING`:
        return {
          ...state,
          journeyData: null,
          journeyState: 'loading',
          journeyError: null,
        };
      case `${GET_JOURNEY}_SUCCESS`:
        console.log('ini masuk', action.payload);
        return {
          ...state,
          journeyData: action.payload,
          journeyState: 'success',
          journeyError: null,
        };
      case `${GET_JOURNEY}_ERROR`:
        return {
          ...state,
          journeyData: null,
          journeyState: 'error',
          journeyError: action.payload,
        };
      default:
        return state;
    }
  },
);
