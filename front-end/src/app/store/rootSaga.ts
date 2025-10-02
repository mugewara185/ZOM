import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./slices/authSaga";
import { watchCartSaga } from "./slices/cartSaga";
import { watchRestaurantSaga } from "./slices/restaurantSaga";
import { watchMenuSaga } from "./slices/menuSaga";
import { watchOrderSaga } from "./slices/orderSaga";
import { watchReviewSaga } from "./slices/reviewSaga";

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
    watchCartSaga(),
    watchRestaurantSaga(),
    watchMenuSaga(),
    watchOrderSaga(),
    watchReviewSaga(),
  ]);
}
