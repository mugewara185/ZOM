import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchRestaurantsRequest,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
} from "./restaurantSlice";
import { restaurants } from "@/data/dummyData";
import { fakeFetch } from "@/api/fakeApi";

function* handleFetchRestaurants() {
  try {
    const data = yield call(fakeFetch, restaurants);
    yield put(fetchRestaurantsSuccess(data));
  } catch {
    yield put(fetchRestaurantsFailure("Failed to fetch restaurants"));
  }
}

export function* watchRestaurantSaga() {
  yield takeLatest(fetchRestaurantsRequest.type, handleFetchRestaurants);
}
