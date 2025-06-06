import { useId } from 'react';
import { getData } from './7b';

export type User = {
  userName: string;
  email: string;
  isOkConditions: boolean;
  turn: string;
  course: string;
  ratio: number;
};

const initialUser: User = {
  userName: '',
  email: '',
  isOkConditions: false,
  turn: 'M',
  course: 'A',
  ratio: 0,
};

export const FormNC: React.FC = () => {
  // Gestión del formulario accediendo a los elementos del DOM
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   const eUserName = form.elements.namedItem('userName') as HTMLInputElement;
  //   const eEmail = form.elements.namedItem('email') as HTMLInputElement;
  //   const eRememberMe = form.elements.namedItem('rememberMe') as HTMLInputElement;

  //   const user: User = {
  //     userName: eUserName.value,
  //     email: eEmail.value,
  //     rememberMe: eRememberMe.checked,
  //   };

  //   console.log('User:', user);
  // };

  // Gestión del formulario accediendo a los datos mediante
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    // const data: Record<string, FormDataEntryValue | boolean> =
    //   Object.fromEntries(formData);

    // for (const [key, value] of formData) {
    //   if (typeof initialUser[key as keyof typeof initialUser] === 'boolean') {
    //     data[key] = value === 'on';
    //   }
    // }
    const data = getData(form, initialUser);
    console.log('User data:', data);
  };

  const isOkId = useId();
  const courseID = useId();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario no controlada</h2>
      <div>
        <label>
          Name
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            defaultValue={initialUser.userName}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue={initialUser.email}
          />
        </label>
      </div>
      {/* <div>
            <label>
            Password
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
            />
            </label>
        </div> */}
      <div className="group-control">
        <input
          type="checkbox"
          id={isOkId}
          name="isOkConditions"
          defaultChecked={initialUser.isOkConditions}
        />
        <label htmlFor={isOkId}>Acepto las condiciones...</label>
      </div>

      <fieldset name="turn">
        <legend>Selecciona un turno</legend>
        <input type="radio" name="turn" id="turno-m" value="M" />
        <label htmlFor="turno-m">Mañana</label>
        <input type="radio" name="turn" id="turno-t" value="T" />
        <label htmlFor="turno-t">Tarde</label>
        <input type="radio" name="turn" id="turno-n" value="N" />
        <label htmlFor="turno-n">Noche</label>
      </fieldset>

      <label htmlFor={courseID}>Elige un curso</label>
      <select name="course" id={courseID} defaultValue={initialUser.course}>
        <option value=""></option>
        <option value="A">Angular</option>
        <option value="R">React</option>
        <option value="N">Node</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};
