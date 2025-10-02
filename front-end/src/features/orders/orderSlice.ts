import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction } from "@reduxjs/toolkit";
import type { Order } from "@/data/types";

type OrderState = {
  items: Order[];
  loading: boolean;
  error: string | null;
};

const initialState: OrderState = {
  items: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrdersRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchOrdersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersFailure } =
  orderSlice.actions;
export default orderSlice.reducer;
