import { fork, all } from 'redux-saga/effects';

import profileSaga from './profile';

export default function* rootsaga() {
  yield all([
    fork(profileSaga)
  ])
};
