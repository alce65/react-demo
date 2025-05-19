import type { JSX } from 'react';
import './App.css';
// import { Form } from './components/7.form';
import { FormNC } from './components/7b.form.NC';
import { ItemsWrapper } from './components/11.items';
import { FormFocus } from './components/12.focus';
import { UserComponent } from './components/14.user';
//import { Initial } from "./components/initial";

const App = (): JSX.Element => {
  return (
    <>
      <UserComponent />;
      <FormNC />;
      {/* // <Form />; 
      // <Initial />; */}
      <ItemsWrapper />;
      <FormFocus />;
    </>
  );
};

export default App;
