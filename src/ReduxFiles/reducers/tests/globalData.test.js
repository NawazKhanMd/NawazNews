import { GData, initialState } from '../globalData';
import { actions } from '../../constants';

describe('Home Reducer', () => {
    it('Handles default case', () => {
        const state = GData(undefined, {});
        expect(state).toEqual(initialState);
    });
    it('Handles loading update ', () => {
        const data =  true;
        const action = { type: actions.loading, payload: data };
        const state = GData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles getAll News save ', () => {
        const action = { type: actions.getTopNews};
        const state = GData(undefined, action);
        expect(state).toMatchSnapshot();
    });
    it('Handles getA News save ', () => {
        const data =  "someCode";
        const action = { type: actions.getANews, payload: data };
        const state = GData(undefined, action);
        expect(state).toMatchSnapshot();
    });
});