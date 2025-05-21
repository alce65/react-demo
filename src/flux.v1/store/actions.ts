export const ActionTypes = {
  start: 'counter@start',
  reset: 'counter@reset',
  stop: 'counter@stop',
  update: 'counter@update',
} as const;

export type ActionWithoutPayload = {
  type:
    | typeof ActionTypes.start
    | typeof ActionTypes.reset
    | typeof ActionTypes.stop;
};

export type ActionPayloadG<T> = {
  type: typeof ActionTypes.update;
  payload:T;
};


// export type ActionPayload = {
//   type: typeof ActionTypes.update;
//   payload: 1 | -1;
// };

export type Action<T> = ActionWithoutPayload | ActionPayloadG<T>;
