import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)
describe("Home tests", () => {

    jest.mock('../TopStories');
    jest.mock("../EachStory");
    jest.mock("../EachStory/EachStory");

    const store = configureStore([])({});
    const TopNewsCodes = [1, 2, 3, 4, 5, 6, 7, 8];
    const getNews = jest.fn();
    it("should load Home with TopNewsCodes length of Childs", () => {
        render(
            <ReduxProvider reduxStore={store}>
                <Home TopNewsCodes={TopNewsCodes} getNews={getNews} />
            </ReduxProvider>
        );
        expect(getNews).toHaveBeenCalledTimes(1);
    });
});