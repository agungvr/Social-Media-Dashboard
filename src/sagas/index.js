import {fork} from 'redux-saga/effects';
import ApiTampan from './../utils/api';
import usersSaga from './users';
import postsSaga from './posts';
import albumsSaga from './albums';

const api = ApiTampan.create();

export default function* rootSaga() {
  yield fork(usersSaga, api);
  yield fork(postsSaga, api);
  yield fork(albumsSaga, api);
}
