import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory, Link
} from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ReduxFiles/reducers';
import { rootSaga } from './ReduxFiles/sagas';

import {Home} from "./UI Components/Home";
import { Layout } from './UI Components/Layout';
 

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout >
          <Router>
            <Switch>
              <Route exact path="/" children={<Home />} />
            </Switch>
          </Router>
          </Layout>
      </Provider>
    </div>
  );
}
