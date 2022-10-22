import produce from 'immer';
import { ActionReducer } from '../_prototype';
import { ReducerState } from './_prototype';

const INITIAL_STATE: ReducerState = {
  token: null,
  authState: '',
};

export const actionReducer = produce(
  (
    state: ReducerState = INITIAL_STATE,
    action: ActionReducer,
  ): ReducerState => {
    switch (action.type) {
      case 'TEST':
        return {
          ...state,
          authState: '',
        };

      default:
        return state;
    }
  },
);

export default actionReducer;
