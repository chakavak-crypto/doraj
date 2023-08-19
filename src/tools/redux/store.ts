import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MainSideBarReducer from '@/features/MainSideBar/MainSideBarSlice';
import LogoutModalReducer from "@/features/LogoutModal/LogoutModalSlice";

export const store = configureStore({
  reducer: {
    main_side_bar: MainSideBarReducer,
    logout_modal: LogoutModalReducer,
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