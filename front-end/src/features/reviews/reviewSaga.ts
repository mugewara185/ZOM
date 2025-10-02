import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
} from "./reviewSlice";
import { reviews } from "@/data/dummyData";
import { fakeFetch } from "@/api/fakeApi";

function* handleFetchReviews(action: ReturnType<typeof fetchReviewsRequest>) {
  try {
    const data = yield call(
      fakeFetch,
      reviews.filter((r) => r.restaurantId === action.payload)
    );
    yield put(fetchReviewsSuccess(data));
  } catch {
    yield put(fetchReviewsFailure("Failed to fetch reviews"));
  }
}

export function* watchReviewSaga() {
  yield takeLatest(fetchReviewsRequest.type, handleFetchReviews);
}
