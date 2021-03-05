import { loading, getTopNews, getANews } from "../index";
import { actions } from '../../constants'

describe("reCaptcha actions", () => {
  it("should create an action to setLoading Flag", () => {
    const payload = true;
    const expectedAction = {
      type: actions.loading,
      payload
    };
    expect(loading(payload)).toEqual(expectedAction);
  });
  it("should create an action to get Top News token", () => {
    const expectedAction = {
      type: actions.getTopNews
    };
    expect(getTopNews()).toEqual(expectedAction);
  });
  it("should create an action to get a news", () => {
    const code = "someCode";
    const expectedAction = {
      type: actions.getANews,
      payload: code
    };
    expect(getANews(code)).toEqual(expectedAction);
  });
});
