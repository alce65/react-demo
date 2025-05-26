import { forwardRef, useId } from 'react';

// Hasta react 19

type Props = {
  name: string;
};

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ name }, ref) => {
    const nameID = useId();
    return (
      <input
        ref={ref} // Referencia al input
        type="text"
        id={nameID} // ID único para el input
        name={name}
      />
    );
  },
);

type Props19 = {
  name: string;
  ref: React.Ref<HTMLInputElement>;
};

export const Input19: React.FC<Props19> = ({ name, ref }) => {
  const nameID = useId();
  return (
    <input
      ref={ref} // Referencia al input
      type="text"
      id={nameID} // ID único para el input
      name={name}
    />
  );
};
