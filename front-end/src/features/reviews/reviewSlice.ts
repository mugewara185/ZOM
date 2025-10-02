import { createSlice } from "@reduxjs/toolkit";
import type{ PayloadAction } from "@reduxjs/toolkit";
import type { Review } from "@/data/types";

type ReviewState = {
  items: Review[];
  loading: boolean;
  error: string | null;
};

const initialState: ReviewState = {
  items: [],
  loading: false,
  error: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    fetchReviewsRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchReviewsSuccess(state, action: PayloadAction<Review[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchReviewsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchReviewsRequest, fetchReviewsSuccess, fetchReviewsFailure } =
  reviewSlice.actions;
export default reviewSlice.reducer;
