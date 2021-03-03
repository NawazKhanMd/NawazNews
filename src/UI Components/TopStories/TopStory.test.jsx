/* eslint-disable max-len */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Base } from "./TopStory";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)

describe("TopStory tests", () => {
    const store = configureStore([])({});
    const code = "someCode";
    const someData = {
        "by": "marc__1",
        "descendants": 28,
        "id": "someCode",
        "kids": [],
        "score": 134,
        "time": 1614806133,
        "title": "Some Title",
        "type": "story",
        "url": "https://investor.okta.com/news-releases/news-release-details/okta-signs-definitive-agreement-acquire-auth0-provide-customer"
    }

    const getNews = jest.fn();
    beforeEach(() => {
        render(<ReduxProvider reduxStore={store}>
            <Base code={code} data={someData} getNews={getNews} />
        </ReduxProvider>);
    });
    it("should load a Story", () => {
        expect(getNews).toHaveBeenCalledTimes(1);
        expect(screen.queryAllByText(/Some Title/i)).toHaveLength(1);
    });
});