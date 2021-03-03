import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../constants';
import { get, restApiUrls } from "../../Utils/fetchInterceptor";

export function* getTopNewsSaga(action) {
    yield put({ type: actions.loading, payload: true });
    try {
        const data = yield call(get({
            url: restApiUrls.getTopNews,
        }));
        yield put({ type: actions.getTopNewsSuccess, payload: data.data });
    } catch (e) {
        yield put({ type: actions.getTopNewsFailure, payload: e.message });
    }
    yield delay(500);
    yield put({ type: actions.loading, payload: false });
}

export function* rootSaga() {
    yield takeEvery([actions.getTopNews], getTopNewsSaga);
}