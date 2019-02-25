import { put, takeEvery, call } from 'redux-saga/effects';
import {
  LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAIL,
  CLEAR_STATE_FAIL, CLEAR_STATE_SUCCESS, CLEAR_STATE_REQUEST
} from '../constants/profile';
import Api from '@services/api';

function* loadProfile({type, payload}) {
  try {
    const { email } = payload;
    const result = yield call(Api.getUser, email);
    console.log(result.length, result[0]);
    if (result.length === 1) {
      yield put({
        type: LOAD_SUCCESS,
        payload: result[0]
      })
    } else {
      /** Triggers on situation where an 'unregistered' user logs into the application */
      const unknowUserProfile = { id: 0 };
      yield put({
        type: LOAD_SUCCESS,
        payload: unknowUserProfile
      })
    }
  } catch (error) {
      yield put({ type: LOAD_FAIL })
  }
}

function* clearProfile() {
  try {
    yield put({
      type: CLEAR_STATE_SUCCESS
    })
  } catch (error) {
    yield put({
      type: CLEAR_STATE_FAIL
    })
  }
}

function* profileSaga() {
  yield takeEvery(LOAD_REQUEST, loadProfile);
  yield takeEvery(CLEAR_STATE_REQUEST, clearProfile);
}

export default profileSaga;
