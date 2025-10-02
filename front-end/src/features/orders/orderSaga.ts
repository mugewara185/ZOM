import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from "./orderSlice";
import { orders } from "@/data/dummyData";
import { fakeFetch } from "@/api/fakeApi";

function* handleFetchOrders(action: ReturnType<typeof fetchOrdersRequest>) {
  try {
    const data = yield call(
      fakeFetch,
      orders.filter((o) => o.userId === action.payload)
    );
    yield put(fetchOrdersSuccess(data));
  } catch {
    yield put(fetchOrdersFailure("Failed to fetch orders"));
  }
}

export function* watchOrderSaga() {
  yield takeLatest(fetchOrdersRequest.type, handleFetchOrders);
}
