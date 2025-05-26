import { useState } from 'react';

type UseToggle = (initial?: boolean) => [boolean, () => void];

export const useToggle: UseToggle = (initial = false) => {
    const [state, setState] = useState(initial);
  
    const toggle = (): void => {
        setState((prev) => !prev);
    };
    return [state, toggle];
}