import { ActionTypes, type ActionPayloadG, type ActionWithoutPayload } from "./actions";

export const start = (): ActionWithoutPayload => ({
    type: ActionTypes.start,
})

export const reset = (): ActionWithoutPayload => ({
    type: ActionTypes.reset,
})

export const stop = (): ActionWithoutPayload => ({
    type: ActionTypes.stop,
})

export const update = (payload: 1 | -1): ActionPayloadG< 1 | -1> => ({
    type: ActionTypes.update,
    payload,
})

// const updateThunc () => {

// }