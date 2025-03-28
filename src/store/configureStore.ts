import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createReducer } from './reducers';


export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools:
    process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL!.length > 0,
});

export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
