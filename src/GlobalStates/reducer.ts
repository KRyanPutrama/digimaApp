import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  actionReducer as auth,
  ReducerState as AuthReducerState,
} from './auth';
import {
  actionReducer as journey,
  ReducerState as JourneyReducerState,
} from './journey';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  // reducer here
  auth,
  journey,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;

export type RootReducerState = {
  auth: AuthReducerState;
  journey: JourneyReducerState;
};
