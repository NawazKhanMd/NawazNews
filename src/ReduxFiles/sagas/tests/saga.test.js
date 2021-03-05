import { runSaga } from "redux-saga";
import { getTopNewsSaga } from "..";
import "babel-polyfill";

describe("OnlyOne Saga tests", () => {
  let dispatched = [];
  const state = "some state";
  const store = {
    dispatch: action => dispatched.push(action),
    getState: () => state
  };

  beforeEach(() => {
    dispatched = [];
    jest.clearAllMocks();
  });

  it("should put action to update steps when isSignatory is changed", async () => {
    await runSaga(store, getTopNewsSaga, {}).toPromise();
console.log(dispatched)
console.log(dispatched)
console.log(dispatched)
console.log(dispatched)
    // expect(dispatched).toEqual([
    //   setStepsStatus(
    //     [
    //       { flowId: `${COMPANY_SIGNATORY_ID}${stakeholderId}`, step: STEP_1 },
    //       { flowId: `${COMPANY_SIGNATORY_ID}${stakeholderId}`, step: STEP_2 },
    //       { flowId: `${COMPANY_SIGNATORY_ID}${stakeholderId}`, step: STEP_3 },
    //       { flowId: `${COMPANY_STAKEHOLDER_ID}${stakeholderId}`, step: STEP_6 }
    //     ],
    //     STEP_STATUS.AVAILABLE
    //   )
    // ]);
  });

});
