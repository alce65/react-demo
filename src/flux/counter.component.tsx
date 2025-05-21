import { useReducer } from 'react';
import { counterReducer } from './reducer';
import type { CounterState } from './counter';

export const CounterComponent: React.FC = () => {
  const initialState: CounterState = {
    value: 0,
    clicks: 0,
    isActive: false,
  };

  // const [state, setState] = useState(0)

  const [state, dispatcher] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Value: {state.value}</p>
      <p>Clicks: {state.clicks}</p>
      <button
        onClick={() => dispatcher({ type: 'update', payload: 1 })}
        disabled={!state.isActive}
      >
        ➕
      </button>
      <button
        onClick={() => dispatcher({ type: 'update', payload: -1 })}
        disabled={!state.isActive}
      >
        ➖
      </button>
      <button onClick={() => dispatcher({ type: 'start' })}>Start</button>
      <button onClick={() => dispatcher({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatcher({ type: 'stop' })}>Stop</button>
    </div>
  );
};
