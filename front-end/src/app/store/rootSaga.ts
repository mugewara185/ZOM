import { all } from "redux-saga/effects";
import { watchAuthSaga } from "@/features/auth/authSaga";
import { watchCartSaga } from "@/features/cart/cartSaga";
import { watchRestaurantSaga } from "@/features/restaurant/restaurantSaga";
import { watchMenuSaga } from "@/features/menu/menuSaga";
import { watchOrderSaga } from "@/features/orders/orderSaga";
import { watchReviewSaga } from "@/features/reviews/reviewSaga";

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
