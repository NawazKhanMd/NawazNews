import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../constants';
import { get, restApiUrls } from "../../Utils/fetchInterceptor";

export function* getTopNewsSaga(action) {
    yield put({ type: actions.loading, payload: true });
    try {
        const response = yield call(get({
            url: restApiUrls.getTopNews,
        }));
        yield put({ type: actions.getTopNewsSuccess, payload: response.data });
    } catch (e) {
        yield put({ type: actions.getTopNewsFailure, payload: e.message });
    }
    yield delay(500);
    yield put({ type: actions.loading, payload: false });
}
export function* getANewsSaga(action) {
    try {
        const response = yield call(get({
            url: restApiUrls.getPost.replace("#{Number}#",action.payload),
        }));
        yield put({ type: actions.getANewsSuccess, payload: response.data });
    } catch (e) {
        yield put({ type: actions.getTANewsFailure, payload: e.message });
    }
}

export function* rootSaga() {
    yield takeEvery([actions.getTopNews], getTopNewsSaga);
    yield takeEvery([actions.getANews], getANewsSaga);
}