import { useId, useRef } from 'react';

export const FormFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  //   const focusInput = (ev: React.MouseEvent<HTMLButtonElement>): void => {
  //     const form = ev.currentTarget.parentElement as HTMLFormElement;
  //     const input = form.querySelector('input[type="text"]') as HTMLInputElement;
  //     input.focus();
  //     console.log('Focus input');
  //   };

  const focusInput = (): void => {
    if (inputRef.current == null) {
      return;
    }
    inputRef.current.focus();
  };

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input
          ref={inputRef} // Referencia al input
          type="text"
          id={nameId}
          name="name"
        />
      </div>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input type="email" id={emailId} name="email" />
      </div>
      <div>
        <label htmlFor={passwordId}>Password</label>
        <input type="password" id={passwordId} name="password" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={focusInput}>
        Focus
      </button>
    </form>
  );
};
