import { ActionTypes, type Action } from './actions';
import type { CounterState } from '../types/counter';
import type { ActionPayloadG } from '../store/actions';

//type Reducer<S, A> = (state: S, action: A) => S;

export const counterReducerOld: React.Reducer<CounterState, Action<1 | -1>> = (
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
    case ActionTypes.rolDice:
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

export const counterReducer: React.Reducer<CounterState, Action<number>> = (
  state,
  action,
): CounterState => {
  const reducers = {
    [ActionTypes.start]: (): CounterState => ({
      ...state,
      isActive: true,
    }),
    [ActionTypes.stop]: (): CounterState => ({
      ...state,
      isActive: false,
    }),
    [ActionTypes.update]: (): CounterState => ({
      ...state,
      value: state.value + (action as ActionPayloadG<1 | -1>).payload,
      clicks: state.clicks + 1,
    }),
    [ActionTypes.rolDice]: (): CounterState => (
      {
      ...state,
      value: state.value + (action as ActionPayloadG<number>).payload,
      clicks: state.clicks + 1,
    }),
    [ActionTypes.reset]: (): CounterState => ({
      ...state,
      value: 0,
      clicks: 0,
      isActive: false,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};
