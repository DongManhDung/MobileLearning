import { all } from 'redux-saga/effects';
import { watchJob } from '../handle/jobSaga.js';

export default function* saga() {
  yield all([watchJob()]);
}