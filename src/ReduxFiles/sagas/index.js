import { call, put, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../constants';
import { get, restApiUrls } from "../../Utils/fetchInterceptor";

export function* getTopNewsSaga(action) {
    try {
        const data = yield call(get({
            url: restApiUrls.getTopNews,
        }));
        console.log(data);
        // yield put({ type: actions.save_user_data_success, payload: data });
    } catch (e) {
        console.log(e);
        // yield put({ type: actions.save_user_data_failure, payload: e.message });
    }
}

export function* rootSaga() {
    yield takeEvery([actions.getNews], getTopNewsSaga);
}