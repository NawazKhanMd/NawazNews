/* eslint-disable max-len */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TopStories from "./index";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)
jest.mock("./TopStory");

describe("TopStories tests", () => {
    const store = configureStore([])({});
    const string = "A".repeat(40);
    const TopNewsCodes = [...string];

    beforeEach(() => {
        render(<ReduxProvider reduxStore={store}><TopStories TopNewsCodes={TopNewsCodes} /></ReduxProvider>);
    });
    it("should load TopStories with initial 25 list of rows", () => {
        expect(screen.queryAllByText(/next/i)).toHaveLength(1);
        expect(screen.queryAllByText(/prev/i)).toHaveLength(0);
    });
    it("should load TopStories with remaining 14 list of rows", () => {
        fireEvent.click(screen.queryAllByText(/next/i)[0]);
        expect(screen.queryAllByText(/next/i)).toHaveLength(1);
        expect(screen.queryAllByText(/prev/i)).toHaveLength(1);
    });
});