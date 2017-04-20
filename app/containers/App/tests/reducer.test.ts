import * as expect from 'expect';
import appReducer from '../reducer';
import {
} from '../actions';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
});
