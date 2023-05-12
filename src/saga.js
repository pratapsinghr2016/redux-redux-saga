import { call, takeEvery, put } from "Redux-Saga/effects";

let callAPI = async ({ url }) => {
  let res = await fetch(url);
  res = await res.json();
  return res;
};

export function* fetchNumberSaga() {
  try {
    let result = yield call(() =>
      callAPI({
        url: "https://jsonplaceholder.typicode.com/todos/1",
      })
    );
    yield put({ type: "ASYNC_SUCCESS", payload: result });
  } catch (e) {
    yield put({ type: "ASYNC_ERR" });
  }
}

export default function* rootSaga() {
  yield takeEvery("ASYNC", fetchNumberSaga);
}
