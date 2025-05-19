import { useRef } from "react";

export const FormFocus: React.FC = () => {


    const inputRef = useRef<HTMLInputElement>(null)


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
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef} // Referencia al input
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={focusInput}>
        Focus
      </button>
    </form>
  );
};
