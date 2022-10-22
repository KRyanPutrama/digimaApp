import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import combinedReducer from './reducer';
import registeredMiddlewares from './middleware';

const store = configureStore({
  reducer: combinedReducer,
  middleware: registeredMiddlewares,
});

const persistor = persistStore(store);

export { store, persistor };
