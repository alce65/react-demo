import type { JSX } from 'react';
import './App.css';
// import { Form } from './components/7.form';
import { FormNC } from './components/7b.form.NC';
import { ItemsWrapper } from './components/11.items';
import { FormFocus } from './components/12.focus';
import { UserComponent } from './components/15.user';
import { CounterComponent } from './flux.v1/components/counter.component';
import { SampleComponent } from './oop/Components/sample';
import { Consumer } from './components/17.consumer';
//import { Initial } from "./components/initial";

const App = (): JSX.Element => {
  return (
    <>
      <Consumer />;
      <UserComponent />;
      <FormNC />;
      {/* // <Form />; 
      // <Initial />; */}
      <ItemsWrapper />;
      <FormFocus />;
      <CounterComponent />;
      <h3>Componente basado en clases</h3>
      <SampleComponent name="Sample" />;
    </>
  );
};

export default App;
