import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  actionReducer as auth,
  ReducerState as AuthReducerState,
} from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  // reducer here
  auth,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;

export type RootReducerState = {
  auth: AuthReducerState;
};
