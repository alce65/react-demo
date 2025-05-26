import type { CounterState } from '../types/counter';
import { ActionTypes, type ActionWithoutPayload } from './actions';
import { counterReducer } from './reducer';

describe('Reducer CounterReducer', () => {
  test('should return the initial state', () => {
    // Arrange
    const initialState: CounterState = {
      value: 0,
      clicks: 0,
      isActive: false,
    };
    const action: ActionWithoutPayload = {
      type: 'invalid',
    } as unknown as ActionWithoutPayload;
    // Act
    const result = counterReducer(initialState, action);
    // Assert
    expect(result).toEqual(initialState);
  });

    test('if action is counter@star, should return the new state with  isActive: true', () => {
    // Arrange
    const initialState: CounterState = {
      value: 0,
      clicks: 0,
      isActive: false,
    };
    const action: ActionWithoutPayload = {
      type: ActionTypes.start,
    } as unknown as ActionWithoutPayload;
    // Act
    const result = counterReducer(initialState, action);
    // Assert
    expect(result.isActive).toBe(true);
  });
});
