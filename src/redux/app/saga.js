import { all, takeEvery, put, fork,   } from 'redux-saga/effects';
import actions from './actions';

function* appStart() {
	yield takeEvery(actions.APP_START, function*(action) {
		yield put(actions.loaderSet(true));
		yield put(actions.appStarted());
		yield put(actions.loaderSet(false));
	});
}

export default function* appSaga() {
	yield all([
    fork(appStart),
  ]);
}
