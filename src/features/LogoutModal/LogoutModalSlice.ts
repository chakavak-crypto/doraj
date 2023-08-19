import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@/tools/redux/store';

export interface LogoutModalState {
  open: boolean;
}

const initialState: LogoutModalState = {
  open: false,
};

export const LogoutModalSlice = createSlice({
  name: 'logout_modal',
  initialState,
  reducers: {
    openLogoutModal: (state) => {
      state.open = true;
    },
    closeLogoutModal: (state) => {
      state.open = false;
    },
  },
});

export const { openLogoutModal, closeLogoutModal } = LogoutModalSlice.actions;

export const selectOpen = (state: RootState) => state.logout_modal.open;

export default LogoutModalSlice.reducer;