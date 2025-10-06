import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction } from "@reduxjs/toolkit";
import type { Restaurant } from "@/data/types";

export type RestaurantState = {
  items: Restaurant[];
  loading: boolean;
  error: string | null;
};

const initialState: RestaurantState = {
  items: [],
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchRestaurantsRequest(state) {
      state.loading = true;
    },
    fetchRestaurantsSuccess(state, action: PayloadAction<Restaurant[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchRestaurantsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchRestaurantsRequest,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
