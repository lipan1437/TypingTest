import { put, takeLatest, select } from 'redux-saga/effects';

function* updateAccuracySaga(action) {
  const input = action.payload;
  const state = yield select(); // Access the entire state from the Redux store
  const nextKeys = yield input.slice(0, state.nextKeys.length);

  const incorrectCount = Array.from(input).reduce((count, char, index) => {
    return count + (char !== state.nextKeys.charAt(index) ? 1 : 0);
  }, 0);

  const accuracy = ((input.length - incorrectCount) / input.length) * 100;

  yield put({ type: 'UPDATE_NEXT_KEYS', payload: nextKeys });
  yield put({ type: 'UPDATE_ACCURACY', payload: accuracy });
}

function* rootSaga() {
  yield takeLatest('UPDATE_ACCURACY', updateAccuracySaga);
}

export default rootSaga;
