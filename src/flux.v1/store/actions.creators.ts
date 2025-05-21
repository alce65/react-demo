import {
  ActionTypes,
  type Action,
  type ActionPayloadG,
  type ActionWithoutPayload,
} from './actions';

export const start = (): ActionWithoutPayload => ({
  type: ActionTypes.start,
});

export const reset = (): ActionWithoutPayload => ({
  type: ActionTypes.reset,
});

export const stop = (): ActionWithoutPayload => ({
  type: ActionTypes.stop,
});

export const update = (payload: 1 | -1): ActionPayloadG<1 | -1> => ({
  type: ActionTypes.update,
  payload,
});

// export const rolDice = (payload: number): ActionPayloadG<number> => ({
//   type: ActionTypes.rolDice,
//   payload,
// });

export const rolDice =
  (value: number, callback: () => Promise<number>) =>
  async (dispatcher: React.ActionDispatch<[action: Action<number>]>): Promise<void>=> {
    const num = await callback();

    const action =  ():  ActionPayloadG<number> => ({
      type: ActionTypes.rolDice,
      payload: num * value,
    });

    dispatcher(action());

};
