import { useState } from 'react';

type User = {
  userName: string;
  email: string;
  rememberMe: boolean;
};

const initialUser = {
  userName: '',
  email: '',
  rememberMe: true,
};

export const Form: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('User:', user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    // setUser({...user, [name]: value});
    setUser((prevUser) => ({
      ...prevUser,
      [name]: e.target.type === 'checkbox' ? e.target.checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario controlado</h2>,
      <div>
        <label>
          Name
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={user.userName}
            onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
      <div>
        <label>
          Remember Me
          <input
            type="checkbox"
            name="rememberMe"
            checked={user.rememberMe}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
