import { ActionTypes, type Action } from './actions';
import type { CounterState } from '../types/counter';

//type Reducer<S, A> = (state: S, action: A) => S;

export const counterReducer: React.Reducer<CounterState, Action<1 | -1>> = (
  state,
  action,
) => {
  switch (action.type) {
    case ActionTypes.start:
      return {
        ...state,
        isActive: true,
      };
    case ActionTypes.update:
      return {
        ...state,
        value: state.value + action.payload,
        clicks: state.clicks + 1,
      };
    case ActionTypes.reset:
      return {
        ...state,
        value: 0,
        clicks: 0,
        isActive: false,
      };
    case ActionTypes.stop:
      return {
        ...state,
        isActive: false,
      };
    default:
      console.log(`Unknown action type: ${action}`);
      return state;
  }
};
