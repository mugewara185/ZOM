import { takeLatest, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import { users } from "@/data/dummyData";
import { fakeFetch } from "@/api/fakeApi";

function* handleLoginRandom(action: ReturnType<typeof loginRequest>) {
  try {
    const found = users.find((u) => u.email.toLowerCase() === action.payload.email.toLowerCase());
    const user = found || users[0]; // fallback
    const data = yield call(fakeFetch, user);
    yield put(loginSuccess(data));
  } catch {
    yield put(loginFailure());
  }
}
function* handleLogin(action: ReturnType<typeof loginRequest>) {
  try {
    const found = users.find((u) => u.email.toLowerCase() === action.payload.email.toLowerCase());
    const user = found ? (()=>{console.log('found user...'); return found;})() 
                       : (()=>{console.log('user not found !!!'); 
                               console.log('fallBack User', users[0]); return users[0] // fallback
                       })()  
    const data = yield call(fakeFetch, user);
    yield put(loginSuccess(data));
  } catch {
    yield put(loginFailure());
  }
}

export function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
