import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction } from "@reduxjs/toolkit";
import type { MenuItem } from "@/data/types";

type MenuState = {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
};

const initialState: MenuState = {
  items: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenuRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      console.log('action:',action)
    },
    fetchMenuSuccess(state, action: PayloadAction<MenuItem[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchMenuFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchMenuRequest, fetchMenuSuccess, fetchMenuFailure } = menuSlice.actions;
export default menuSlice.reducer;
