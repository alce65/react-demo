import { useReducer } from 'react';
import { counterReducer } from '../store/reducer';
import type { CounterState } from '../types/counter';
import * as ac from '../store/actions.creators';

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
        onClick={() => {
          dispatcher(ac.update(1))}

        }
        disabled={!state.isActive}
      >
        ➕
      </button>
      <button
        onClick={() => dispatcher(ac.update(-1))}
        disabled={!state.isActive}
      >
        ➖
      </button>
      <button onClick={() => dispatcher(ac.start())}>Start</button>
      <button onClick={() => dispatcher(ac.reset())}>Reset</button>
      <button onClick={() => dispatcher(ac.stop())}>Stop</button>
    </div>
  );
};
