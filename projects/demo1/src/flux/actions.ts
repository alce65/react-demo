/*
- `start`: inicia el contador, estableciendo `isActive` a `true`.
- `reset`: reinicia el contador, estableciendo `value` y `clicks` a 0 y `isActive` a `false`.
- `stop`: detiene el contador, estableciendo `isActive` a `false`.
-------
- `update`: actualiza el valor del contador y el número de clicks.
*/ 

// type Action = {
//   type: "start" | "update" | "reset" | "stop";
//   payload?: number
// };

// export const a1: Action = { type: "start" , payload: 1};
// export const a2: Action = { type: "update" };

export type ActionWithoutPayload = {
   type: "start" | "reset" | "stop"
}

export type ActionPayload = {
   type: "update";
    payload: 1 | -1
}

export type Action = ActionWithoutPayload | ActionPayload
