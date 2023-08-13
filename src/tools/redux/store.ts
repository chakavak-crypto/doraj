import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MainSideBarReducer from '@/features/MainSideBar/MainSideBarSlice';

export const store = configureStore({
  reducer: {
    main_side_bar: MainSideBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;