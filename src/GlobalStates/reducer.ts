import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reducers = combineReducers({
  // reducer here
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
