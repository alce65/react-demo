import type { Action } from './actions';
import type { CounterState } from './counter';

//type Reducer<S, A> = (state: S, action: A) => S;

export const counterReducer: React.Reducer<CounterState, Action> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        isActive: true,
      };
    case 'update':
      return {
        ...state,
        value: state.value + action.payload,
        clicks: state.clicks + 1,
      };
    case 'reset':
      return {
        ...state,
        value: 0,
        clicks: 0,
        isActive: false,
      };
    case 'stop':
      return {
        ...state,
        isActive: false,
      };
    default:
      console.log(`Unknown action type: ${action}`);
      return state;
  }
};
