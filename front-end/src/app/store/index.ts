import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import restaurantReducer from "./slices/restaurantSlice";
import menuReducer from "./slices/menuSlice";
import orderReducer from "./slices/orderSlice";
import reviewReducer from "./slices/reviewSlice";
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
export type AppDispatch = typeof store.dispatch;
