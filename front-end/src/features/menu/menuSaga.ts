import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuFailure,
} from "./menuSlice";
import { menus } from "@/data/dummyData";
import { fakeFetch } from "@/api/fakeApi";

function* handleFetchMenu(action: ReturnType<typeof fetchMenuRequest>) {
  try {
    const data = yield call(
      fakeFetch,
      menus.filter((m) => m.restaurantId === action.payload)
    );
    yield put(fetchMenuSuccess(data));
  } catch {
    yield put(fetchMenuFailure("Failed to load menu"));
  }
}

export function* watchMenuSaga() {
  yield takeLatest(fetchMenuRequest.type, handleFetchMenu);
}
