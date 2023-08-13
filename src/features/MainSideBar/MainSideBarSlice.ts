import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@/tools/redux/store';

export interface MainSideBarState {
  open: boolean;
}

const initialState: MainSideBarState = {
  open: false,
};

export const MainSideBarSlice = createSlice({
  name: 'main_side_bar',
  initialState,
  reducers: {
    openMainSideBar: (state) => {
      state.open = true;
    },
    closeMainSideBar: (state) => {
      state.open = false;
    },
    toggleMainSideBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { openMainSideBar, closeMainSideBar, toggleMainSideBar } = MainSideBarSlice.actions;

export const selectOpen = (state: RootState) => state.main_side_bar.open;

export default MainSideBarSlice.reducer;