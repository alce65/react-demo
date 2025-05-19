import { useLocalStorage } from './2.use.local.storage';

type User = {
  name: string;
  age: number;
  email: string;
};

export const Sample: React.FC = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: '',
  };

  const [storedUser, setStoredUser] = useLocalStorage<User>('users', user);

  return (
    <div>
      <h1>Sample</h1>
      <p>This is a sample component.</p>
      <p>
        Name: {storedUser.name} <br />
        Age: {storedUser.age} <br />
        Email: {storedUser.email}
      </p>
      <button
        onClick={() => setStoredUser({ ...storedUser, name: 'Jane Doe' })}
      >
        Update Name
      </button>
    </div>
  );
};
