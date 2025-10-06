import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "@/features/auth/authSlice";
import cartReducer from "@/features/cart/cartSlice";
import restaurantReducer from "@/features/restaurant/restaurantSlice";
import menuReducer from "@/features/menu/menuSlice";
import orderReducer from "@/features/orders/orderSlice";
import reviewReducer from "@/features/reviews/reviewSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    restaurants: restaurantReducer,
    menu: menuReducer,
    orders: orderReducer,
    reviews: reviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;//q:dynamic type setting? upon dispatch at run time?
