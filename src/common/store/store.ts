import { combineReducers, configureStore } from '@reduxjs/toolkit';
import firstScreenReducer from './reducers/firstScreenReducer';
import secondScreenReducer from './reducers/secondScreenReducer';
import globalThemeReducer from './reducers/globalThemeReducer';

export const storeFactory = () =>
  configureStore({
    reducer: combineReducers({
      firstScreen: firstScreenReducer,
      secondScreen: secondScreenReducer,
      globalTheme: globalThemeReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });

const store = storeFactory();

type IStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { IStore, AppDispatch };
export default store;

